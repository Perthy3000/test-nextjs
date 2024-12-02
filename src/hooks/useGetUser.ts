import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export type User = {
  id: number;
  username: string;
  createdAt: string;
  updatedAt: string;
};

const useGetUser = (id: number) => {
  const query = useQuery({
    queryKey: ["user", id],
    queryFn: async ({ queryKey }) => {
      const res = await axiosInstance.get<User>(`/users/${queryKey[1]}`);
      return res.data;
    },
  });

  return query;
};

export default useGetUser;
