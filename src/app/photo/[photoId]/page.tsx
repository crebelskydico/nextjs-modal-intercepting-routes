import PhotoDisplay from "./PhotoDisplay";
import { ImageUrl } from "@/app/images/utils";

export type PhotoData = {
  id: number;
  title: string;
  path: string;
};

type Props = {
  params: {
    photoId: string;
  };
};

export default async function Photo({ params: { photoId } }: Readonly<Props>) {
  const response = await fetch(`${ImageUrl}/${photoId}`);

  const photoData: PhotoData = await response.json();

  if (!photoData?.id) {
    return <h1 className="text-center">No Photo Found for that ID.</h1>;
  }

  return (
    <div className="mt-2 grid place-content-center">
      <PhotoDisplay photoData={photoData} />
    </div>
  );
}
