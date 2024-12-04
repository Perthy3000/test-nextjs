import CommentListItem from "./commentListItem";
import { Comment } from "@/hooks/useGetComments";

interface ICommentListProps {
  comments: Comment[];
}
const CommentList = ({ comments }: ICommentListProps) => {
  return (
    <div className="flex flex-col gap-6">
      {comments.map((comment) => (
        <CommentListItem key={comment.id} content={comment.content} />
      ))}
    </div>
  );
};

export default CommentList;
