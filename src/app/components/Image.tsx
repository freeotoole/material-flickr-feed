'use client'

import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import NextImage from 'next/image'

// import Icon from '@/app/components/Icon'

export type ImageProps = {
  alt: string
  className?: string
  hover?: boolean
  lazy?: boolean
  sizes?: string
  src: string
  width: number
  height: number
  quality?: number
}

type Aspect = {
  landscape: string
  portrait: string
}

type Settings = {
  forceAspect?: Aspect | null
}

// TODO: Move settings to global
const settings: Settings = {
  // forceAspect: {
  //   landscape: 'aspect-[3/2]',
  //   portrait: 'aspect-[2/3]',
  // },
}

const Image = (props: ImageProps) => {
  const [fadeIn, setFadeIn] = useState(false)
  const [quality, setQuality] = useState(props.quality || 80)
  // console.log('props', props)

  useEffect(() => {
    // setFadeIn(true)
    setTimeout(() => {
      setFadeIn(true)
    }, 1)
  }, [])

  const isPortrait = props.height > props.width

  // ${isPortrait ? 'h-full w-auto' : 'h-auto w-full'}

  return (
    <>
      <Box sx={{ display: 'contents' }}>
        <NextImage
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          width={props.width}
          height={props.height}
          src={props.src}
          alt={props.alt}
          loading={props.lazy ? 'lazy' : 'eager'}
          sizes={props.sizes}
          quality={quality}
        />
        {/* {props.hover && (
          <figcaption aria-hidden="true">
            <span className="text-sm uppercase ">{props.alt}</span>
          </figcaption>
        )} */}
      </Box>
    </>
  )
}

export default Image
