import { Typography } from '@mui/material'
import Box from '@mui/system/Box'
import NextImage from 'next/image'

import { fetchPhotoWithContext, fetchSizes } from '@/app/apiUtils'
import ImageNavigation from '@/app/components/ImageNavigation'
import { settings } from '@/app/settings'
import { FlickrImageProps } from '@/app/types/image'
import { ParamProps } from '@/app/types/page'

interface ImageProps {
  photo: FlickrImageProps
  prevphoto: { id: string }
  nextphoto: { id: string }
}

interface SizeProps {
  label: string
  source: string
  width: string
  height: string
}

export const preload = (id: string, album?: string) => {
  const albumId = settings.albums[album ?? '']?.id
  void fetchPhotoWithContext(id, albumId)
}
export default async function Single({ params }: { params: ParamProps }) {
  const albumId = settings.albums[params.album ?? '']?.id
  // fetch in parallel
  const singlePhoto: ImageProps = await fetchPhotoWithContext(
    params.id,
    albumId
  )

  const { sizes } = await fetchSizes(params.id)

  // navigate in reverse order for latest photos
  const prev = params.album
    ? singlePhoto?.prevphoto?.id
    : singlePhoto?.nextphoto?.id
  const next = params.album
    ? singlePhoto?.nextphoto?.id
    : singlePhoto?.prevphoto?.id

  // preload next and previous photos
  preload(prev, albumId)
  preload(next, albumId)

  // get Medium and Large sizes from sizes array
  const size = {
    md: sizes.size.find((size: SizeProps) => size.label === 'Medium'),
    lg:
      sizes.size.find((size: SizeProps) => size.label === 'Large 2048') ||
      sizes.size.find((size: SizeProps) => size.label === 'Large 1600') ||
      sizes.size.find((size: SizeProps) => size.label === 'Large'),
  }

  const isPortrait = size.lg?.height > size.lg?.width

  return (
    <Box
      sx={
        isPortrait
          ? { height: 'calc(100vh - 3rem)', display: 'flex' }
          : { display: 'flex', flexDirection: 'column' }
      }
    >
      <NextImage
        style={{
          width: `${isPortrait ? 'auto' : '100%'}`,
          height: `${isPortrait ? '100%' : 'auto'}`,
          objectFit: 'cover',
          display: 'block',
        }}
        src={`https://live.staticflickr.com/${singlePhoto?.photo?.server}/${params.id}_${singlePhoto?.photo?.originalsecret}_k.jpg`}
        width={size.lg?.width || size.md?.width}
        height={size.lg?.height || size.md?.height}
        alt={singlePhoto?.photo?.title._content}
        quality={65}
      />
      <Box
        sx={
          isPortrait
            ? {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingLeft: '2.5rem',
                maxWidth: '50rem',
              }
            : { maxWidth: '100rem' }
        }
      >
        <ImageNavigation prev={prev} next={next} />
        <Box
          sx={
            isPortrait
              ? {
                  display: 'flex',
                  gapY: '1rem',
                  flexDirection: 'column',
                }
              : {
                  display: 'flex',
                  gap: '2.5rem',
                  padding: '1.5rem 0',
                }
          }
        >
          <Typography
            variant="h4"
            component="h3"
            sx={
              !isPortrait
                ? { flexBasis: '24rem', flexShrink: '0', textAlign: 'right' }
                : {}
            }
          >
            {singlePhoto?.photo?.title._content}
          </Typography>

          <Box
            sx={
              isPortrait
                ? { maxWidth: '30rem', paddingTop: '.5rem' }
                : { maxWidth: '50rem', paddingTop: '.5rem' }
            }
          >
            <Typography
              variant="body1"
              component="p"
              dangerouslySetInnerHTML={{
                __html: singlePhoto?.photo?.description._content,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
