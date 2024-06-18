
export const ImageUrl = !process.env.VERCEL_PROJECT_PRODUCTION_URL ? `http://localhost:3000/images` : `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/images`;