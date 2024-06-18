import {ImageData} from '@/data/images';

export async function GET() {
  return Response.json(ImageData)
}