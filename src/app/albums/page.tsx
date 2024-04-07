import { Skeleton, Typography } from '@mui/material'

import { fetchPublicPhotos } from '@/app/apiUtils'

export default async function PostsPage() {
  const data = await fetchPublicPhotos()

  if (!data.photos) {
    return <Skeleton variant="rectangular" width={210} height={118} />
  }
  return (
    <Typography textAlign="center" variant="h1">
      Albums page coming soon
    </Typography>
  )
}
