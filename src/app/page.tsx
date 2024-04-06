import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

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
        thought I&apos;d sped a few hours reskinning my Flickr feed with
        Material UI 5. It was already using Next.js and TypeScript (with
        Tailwind), so it was a good opportunity to see how easy it is to
        integrate Material UI 5.
      </Typography>
      <Gallery />
    </Box>
  )
}
