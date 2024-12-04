import { Avatar, AvatarFallback } from "../ui/avatar";

interface ICommentListItemProps {
  content: string;
}

const CommentListItem = ({ content }: ICommentListItemProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Avatar>
          <AvatarFallback>{"P"}</AvatarFallback>
        </Avatar>
        <h1>{"PERTH"}</h1>
      </div>
      <p className="ml-10 text-xs">{content}</p>
    </div>
  );
};

export default CommentListItem;
