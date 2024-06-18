import {ImageData} from '@/data/images';

export async function GET(request: Request) {
    const { pathname } = new URL(request.url)
 
  return Response.json(ImageData.images[pathname.substring(pathname.lastIndexOf('/') + 1 ) as any - 1])
}