import GitHub from '@mui/icons-material/GitHub'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { settings } from '@/app/settings'
import Gallery from './components/Gallery'

export default function Home() {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
    >
      <Toolbar />
      <Typography variant="h6" component="strong" textTransform={'uppercase'}>
        Learning{' '}
        <Typography component="span" variant="h6" color="primary">
          Material UI 5
        </Typography>{' '}
        in a weekend
      </Typography>
      <Typography variant="h1" component="h1">
        Free&apos;s Flickr Feed.
      </Typography>
      <Typography variant="h5" component="h3" marginTop={6}>
        It&apos;s been a while since I&apos;ve done anything with Material UI. I
        thought I&apos;d spend a few hours reskinning my Flickr feed with
        Material UI 5. It was already using Next.js and TypeScript (with
        Tailwind), so it was a good opportunity to see how easy it is to
        integrate Material UI 5.
      </Typography>

      <Box
        sx={{
          backgroundColor: 'rgba(255,255,255,.1)',
          maxWidth: '42rem',
          border: '1px dashed rgba(255,255,255,.5)',
          margin: '4rem auto 0',
          padding: '2rem',
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography textAlign="center" variant="h5" component="h3">
          Technologies used:
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem', margin: '1.5rem auto 0' }}>
          {settings?.stack.map((tech: { [key: string]: string }, i: number) => {
            const [techName] = Object.keys(tech)
            const [techUrl] = Object.values(tech)
            const [name, url]: [string, string] = Object.entries(tech)[0]
            return (
              <Chip
                key={i}
                avatar={<Avatar>{name.charAt(0)}</Avatar>}
                label={name}
                component="a"
                variant="outlined"
                clickable
                href={url}
                target="_blank"
                color="primary"
              />
            )
          })}
        </Box>
      </Box>
      <Gallery />
    </Box>
  )
}
