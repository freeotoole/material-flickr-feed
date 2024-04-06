import Box from '@mui/material/Box'

import SinglePhoto from '@/app/components/SinglePhoto'

interface Params {
  id: string
}

export default async function PhotoPage({ params }: { params: Params }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        maxWidth: '100%',
        overflow: 'hidden',
      }}
    >
      <SinglePhoto params={params} />
    </Box>
  )
}
