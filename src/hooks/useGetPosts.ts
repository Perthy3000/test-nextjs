import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Comment } from "./useGetComments";

export type TPost = {
  id: number;
  userId: number;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
};

export type TPostWithCommentsCount = TPost & {
  commentsCount: number
}

export type TPostWithComment = TPost & {
  comments: Comment[]
}

const useGetPosts = () => {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosInstance.get<TPostWithCommentsCount[]>("/posts");
      return res.data;
    },
  });

  return query;
};

export default useGetPosts;
