import { useQuery } from "@tanstack/react-query";

import { apiRequest } from "@api/Api";
import Spinner from "@components/shared/Spinner/Spinner";

interface PhotoItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const fetchPhotos = async () => {
  const response = await apiRequest<unknown, PhotoItem[]>({
    url: "/photos",
    params: {
      _limit: 12,
    },
  });

  return response.data;
};

export const Gallery = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchPhotos,
  });

  return (
    <div className="flex flex-col flex-1 max-h-full px-6 overflow-y-auto text-slate-900 dark:text-slate-100">
      <h1 className="w-full mb-2 text-4xl font-bold text-left">Gallery</h1>
      <p className="mb-6 text-sm text-slate-700 dark:text-slate-300">
        12 photos loaded from the API.
      </p>

      {isLoading && (
        <div className="flex items-center justify-center flex-1 gap-3">
          <Spinner />
          <span className="font-semibold">Loading photos...</span>
        </div>
      )}

      {isError && (
        <div className="p-4 font-semibold text-red-700 bg-red-100 rounded-xl">
          {error instanceof Error ? error.message : "Failed to load photos."}
        </div>
      )}

      {!isLoading && !isError && (
        <div className="grid grid-cols-1 gap-5 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.map(photo => (
            <article
              key={photo.id}
              className="overflow-hidden bg-white border shadow-sm rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700"
            >
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="object-cover w-full h-36"
              />
              <h2 className="p-3 text-sm font-semibold capitalize">
                {photo.title}
              </h2>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
