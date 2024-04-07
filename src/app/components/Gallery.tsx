'use client'

import React, { useEffect, useState } from 'react'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import Masonry from '@mui/lab/Masonry'
import { Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import ImageListItem from '@mui/material/ImageListItem'
import Link from '@mui/material/Link'
import Box from '@mui/system/Box'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { useInView } from 'react-intersection-observer'
import useSWRInfinite from 'swr/infinite'

import { settings } from '@/app/settings'
import { FlickrImageProps } from '@/app/types/image'

interface GalleryProps {
  options?: any
  title?: string
  tags?: string
  subtitle?: string
  children?: React.ReactNode[]
  album?: string
}

const Gallery = (props: GalleryProps) => {
  const [isLastPage, setIsLastPage] = useState(false)
  const [loading, setLoading] = useState(false)
  const { ref, inView } = useInView()
  const fetcher = (url: any) => {
    performance.mark('fetch-start')
    return fetch(url).then((r) => {
      performance.mark('fetch-end')
      return r.json()
    })
  }

  const albumId = settings.albums[props.album ?? '']?.id
  const apiUrl = albumId ? `/api/albums/${albumId}` : '/api/photos'

  // check for album and fetch photoset or photos
  const { data, error, size, setSize, isLoading, mutate } = useSWRInfinite(
    (index) => `${apiUrl}?page=${index + 1}`,
    fetcher
  )

  useEffect(() => {
    setLoading(
      isLoading ||
        (size > 0 && data && typeof data[size - 1] === 'undefined') ||
        false
    )
    const totalPages = data ? data[0].pages : 0
    setIsLastPage((data && data.length >= totalPages) || false)
  }, [isLoading, data, size])

  useEffect(() => {
    if (!isLastPage && inView) {
      setSize(size + 1)
    }
    // prevent infinite loop of doom
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, isLastPage])

  const photos: any = []

  if (!data) return null

  for (let i = 0; i < data.length; i++) {
    if (data[i]) {
      photos.push(...data[i].photo)
    }
  }

  const columnClasses = 'grid gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'

  const isPortrait = (width: number, height: number) => {
    return height > width
  }

  return (
    <>
      <Box
        component={'section'}
        mt={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Masonry columns={3} spacing={2}>
          {photos &&
            photos.map((photo: FlickrImageProps, i: number) => (
              <React.Fragment key={i}>
                {photo.url_l && (
                  <ImageListItem>
                    <Link
                      component={NextLink}
                      href={`/${props.album ? 'albums/' + props.album : 'photos'}/${
                        photo.id
                      }`}
                    >
                      <NextImage
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                        width={photo.width_l}
                        height={photo.height_l}
                        src={photo.url_l}
                        alt={photo.title}
                        loading={i > 6 ? 'lazy' : 'eager'}
                        quality={65}
                      />
                    </Link>
                  </ImageListItem>
                )}
              </React.Fragment>
            ))}
        </Masonry>
      </Box>
      <Box ref={ref} p={4} mb={4}>
        {isLastPage ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyItems: 'center',
              gap: '.5rem',
            }}
            className="flex items-center justify-center gap-2"
          >
            <SentimentDissatisfiedIcon sx={{ fontSize: 48 }} />
            <Typography variant="h6" component="h6" align="center">
              No more photos here!
            </Typography>
          </Box>
        ) : (
          <>
            {loading && (
              <Box sx={{ display: 'flex', padding: '1rem 0' }}>
                <CircularProgress sx={{ margin: '0 auto' }} />
              </Box>
            )}
          </>
        )}
      </Box>
    </>
  )
}

export default Gallery
