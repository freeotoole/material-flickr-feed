/* eslint-disable react/no-unescaped-entities */

import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

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
        Material UI 5. It was already using Next.js, TypeScript and Tailwind, so
        it was a good opportunity to see how easy it is to integrate Material UI
        5.
      </Typography>

      <Box
        sx={{
          // backgroundColor: 'rgba(255,255,255,.1)',
          backgroundColor: 'secondary.900',
          maxWidth: '60rem',
          border: '1px dashed rgba(255,255,255,.5)',
          margin: '4rem auto 0',
          padding: '1rem',
          // width: '80%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          textAlign="center"
          variant="h5"
          component="h3"
          mb={2}
          textTransform={'uppercase'}
        >
          Technologies used:
        </Typography>

        <Grid container columnSpacing={{ xs: 2, md: 3, lg: 3 }}>
          <Grid xs={12} sm={6} lg={3}>
            <Typography variant="h6" component="h3">
              Material UI
            </Typography>
            <Typography paragraph>
              Leveraged the latest Material UI version for the project's core UI
              components.
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <Typography variant="h6" component="h3">
              Next.js
            </Typography>
            <Typography paragraph>
              Utilized for server-side prefetching, data aggregation, and API
              data caching through its app router.
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <Typography variant="h6" component="h3">
              Flickr API
            </Typography>
            <Typography paragraph>
              Integrated with 7 REST endpoints due to the absence of GraphQL
              support to structure and fetch required data.
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <Typography variant="h6" component="h3">
              CI/CD
            </Typography>
            <Typography paragraph>
              Vercel automated deployments with GitHub integration, following a
              mainline branching strategy
            </Typography>
          </Grid>
        </Grid>

        <Typography
          paragraph
          marginTop={6}
          m={'2rem auto 0'}
          textAlign={'center'}
          maxWidth={'40rem'}
        >
          The code is available on{' '}
          <Link
            href="https://github.com/freeotoole/material-flickr-feed"
            color={'primary.100'}
          >
            Github
          </Link>{' '}
          if you'd like to check it out <br />
          (yep, that was a git pun)
        </Typography>
      </Box>

      <Gallery />
    </Box>
  )
}
