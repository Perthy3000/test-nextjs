import { Avatar, AvatarFallback } from "../ui/avatar"

const CommentListItem = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Avatar>
          <AvatarFallback>{"P"}</AvatarFallback>
        </Avatar>
        <h1>{"PERTH"}</h1>
      </div>
      <p className="ml-10 text-xs">Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.</p>
    </div>
  )
}

export default CommentListItem