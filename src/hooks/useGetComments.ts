import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export type Comments = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const useGetComments = (id: number) => {
  const query = useQuery({
    queryKey: ["comments", id],
    queryFn: async ({ queryKey }) => {
      const res = await axiosInstance.get<Comments[]>(`/comments/${queryKey[1]}`);
      return res.data;
    },
  });

  return query;
};

export default useGetComments;
