import CommentListItem from "./commentListItem";

const CommentList = () => {
  return (
    <div className="flex flex-col gap-6">
      <CommentListItem />
      <CommentListItem />
    </div>
  );
};

export default CommentList;
