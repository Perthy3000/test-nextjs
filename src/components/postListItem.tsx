import useGetUser from "@/hooks/useGetUser";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface IPostProps {
  title: string;
  userId: number;
  tag: string;
  postId: number;
  commentsCount: number;
}

const PostListItem = ({ title, userId, tag, postId, commentsCount }: IPostProps) => {
  const { data: user } = useGetUser(userId);

  return (
    <Link href={`/posts/${postId}`}>
      <div className="bg-white border-grey-100 border first:rounded-t-xl last:rounded-b-xl p-5 flex flex-col gap-1">
        {user && (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback>{user.username[0]}</AvatarFallback>
            </Avatar>
            <h1>{user.username}</h1>
          </div>
        )}
        <div>
          <Badge>{tag}</Badge>
        </div>
        <div>
          <h4 className="text-base font-semibold">{title}</h4>
          <p className="text-xs">description</p>
        </div>
        <div>
          <p className="text-xs text-grey-300">{commentsCount} Comments</p>
        </div>
      </div>
    </Link>
  );
};

export default PostListItem;
