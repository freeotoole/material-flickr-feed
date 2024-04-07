'use client'

import { useCallback, useEffect } from 'react'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import Link from '@mui/material/Link'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const ImageNavigation = ({ prev, next }: { prev?: string; next?: string }) => {
  const path = usePathname()
  const router = useRouter()

  // add animation on navigate - needs to be on single image page
  const prevPath = prev && path.replace(/\/\d+$/, `/${prev}`)
  const nextPath = next && path.replace(/\/\d+$/, `/${next}`)
  // add isLoading to context or something
  const navigate = useCallback(
    (direction: number) => {
      // console.log('navigate', direction)
      direction === -1 && prevPath && router.push(prevPath)
      direction === 1 && nextPath && router.push(nextPath)
    },
    [nextPath, prevPath, router]
  )

  useEffect(() => {
    // console.log('navigate')
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'ArrowLeft') {
        navigate(-1)
      } else if (event.code === 'ArrowRight') {
        navigate(1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [navigate])

  if (!prev && !next) {
    return null
  }

  return (
    <nav>
      <Stack direction="row" spacing={2}>
        {!!prevPath && (
          <ListItem>
            <Link
              component={NextLink}
              href={prevPath}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'white',
              }}
            >
              <ArrowBack />
              <ListItemText>Previous</ListItemText>
            </Link>
          </ListItem>
        )}
        {!!nextPath && (
          <ListItem>
            <Link
              component={NextLink}
              href={nextPath}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'white',
              }}
            >
              <ListItemText>Next</ListItemText>
              <ArrowForward />
            </Link>
          </ListItem>
        )}
      </Stack>
      {/* <List component={Stack} direction="row">
        {!!prevPath && (
          <ListItem>
            <Link component={NextLink} href={prevPath}>
              <ListItemIcon>
                <ArrowLeft strokeWidth={1} />
              </ListItemIcon>
              <ListItemText>Previous</ListItemText>
            </Link>
          </ListItem>
        )}
        {!!nextPath && (
          <ListItem sx={{ marginLeft: 'auto' }}>
            <Link component={NextLink} href={nextPath}>
              Next <ArrowRight strokeWidth={1} />
            </Link>
          </ListItem>
        )}
      </List> */}
    </nav>
  )
}

export default ImageNavigation
