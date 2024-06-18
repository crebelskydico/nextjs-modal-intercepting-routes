import Images from '@/data/images.json';

export async function GET() {
  return Response.json(Images)
}