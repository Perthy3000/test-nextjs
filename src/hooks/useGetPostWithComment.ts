import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { TPostWithComment } from "./useGetPosts";

const useGetPostWithComment = (id: number) => {
  const query = useQuery({
    queryKey: ["posts-w-comment", id],
    queryFn: async ({ queryKey }) => {
      const res = await axiosInstance.get<TPostWithComment>(
        `/posts/with-comments/${queryKey[1]}`
      );
      return res.data;
    },
  });

  return query;
};

export default useGetPostWithComment;
