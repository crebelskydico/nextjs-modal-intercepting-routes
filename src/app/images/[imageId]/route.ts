import Images from '@/data/images.json';

export async function GET(request: Request) {
    const { pathname } = new URL(request.url)
 
  return Response.json(Images.images[pathname.substring(pathname.lastIndexOf('/') + 1 ) as any - 1])
}