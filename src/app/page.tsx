import PhotoDisplay from "./photo/[photoId]/PhotoDisplay";
import type { PhotoData } from "./photo/[photoId]/page";
import { ImageUrl } from "@/app/images/utils";
export default async function Home() {
  console.log(ImageUrl);
  const response = await fetch(ImageUrl);

  const images: PhotoData[] = await response.json().then((data) => data.images);

  if (!images?.length) {
    return <h1>No Images to Display</h1>;
  }

  return (
    <main className="flex flex-col items-center gap-8 pb-8">
      {images.map((photoData) => (
        <PhotoDisplay key={photoData.id} photoData={photoData} />
      ))}
    </main>
  );
}
