import { useQuery } from "@tanstack/react-query";

import { apiRequest } from "@api/Api";
import Spinner from "@components/shared/Spinner/Spinner";

interface NewsItem {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const fetchNews = async () => {
  const response = await apiRequest<unknown, NewsItem[]>({
    url: "/comments",
    params: {
      _limit: 10,
    },
  });

  return response.data;
};

export const News = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  });

  return (
    <div className="flex flex-col flex-1 max-h-full px-6 overflow-y-auto text-slate-900 dark:text-slate-100">
      <h1 className="w-full mb-2 text-4xl font-bold text-left">News</h1>
      <p className="mb-6 text-sm text-slate-700 dark:text-slate-300">
        Latest comments loaded from the API.
      </p>

      {isLoading && (
        <div className="flex items-center justify-center flex-1 gap-3">
          <Spinner />
          <span className="font-semibold">Loading news...</span>
        </div>
      )}

      {isError && (
        <div className="p-4 font-semibold text-red-700 bg-red-100 rounded-xl">
          {error instanceof Error ? error.message : "Failed to load news."}
        </div>
      )}

      {!isLoading && !isError && (
        <div className="grid grid-cols-1 gap-4 pb-6 md:grid-cols-2">
          {data?.map(item => (
            <article
              key={item.id}
              className="p-4 bg-white border shadow-sm rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700"
            >
              <h2 className="mb-1 text-lg font-bold capitalize">{item.name}</h2>
              <p className="mb-3 text-sm font-semibold text-blue-700 break-words dark:text-blue-300">
                {item.email}
              </p>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
