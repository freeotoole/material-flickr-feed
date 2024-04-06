import { NextRequest, NextResponse } from 'next/server'

import {
  fetchPhoto,
  fetchPhotoContext,
  fetchPhotosetContext,
} from '@/app/apiUtils'

interface Params {
  id: string
}

export async function GET(request: NextRequest, context: { params: Params }) {
  const { id } = context.params
  const album = request.nextUrl.searchParams.get('album')

  try {
    let contextResponse
    if (album) {
      contextResponse = await fetchPhotosetContext(album, id)
    } else {
      contextResponse = await fetchPhotoContext(id)
    }
    const photoResponse = await fetchPhoto(id)
    const data = { ...photoResponse, ...contextResponse } //, ...contextResponse
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      {
        error:
          'Internal Server Error - photos.getInfo and photos.getContext fetch failed',
      },
      { status: 500 }
    )
  }
}
