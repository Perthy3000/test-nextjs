import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export type Post = {
  id: number;
  userId: number;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
};

const useGetPosts = () => {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosInstance.get<Post[]>("/posts");
      return res.data;
    },
  });

  return query;
};

export default useGetPosts;
