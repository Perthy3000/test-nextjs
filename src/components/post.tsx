import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import CommentList from "./comment/commentList";
import CommentSection from "./comment/commentSection";

interface IPostProps {
  postId: number;
}

const Post = ({}: IPostProps) => {
  return (
    <div className="max-w-[800px] m-auto">
      <Link href={"/"}>
        <Button
          size={"icon"}
          className="bg-green-100 text-black hover:text-white mb-10"
        >
          <ArrowLeft className="size-6" />
        </Button>
      </Link>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Avatar>
            <AvatarFallback>{"P"}</AvatarFallback>
          </Avatar>
          <h1>{"Perth"}</h1>
        </div>
        <div className="mb-4">
          <Badge>hello</Badge>
        </div>
        <div className="mb-7">
          <h4 className="text-3xl font-semibold mb-4">The Big Short War</h4>
          <p className="text-xs">
            {`Tall, athletic, handsome with cerulean eyes, he was the kind of
            hyper-ambitious kid other kids loved to hate and just the type to
            make a big wager with no margin for error. But on the night before
            the S.A.T., his father took pity on him and canceled the bet. “I
            would've lost it,” Ackman concedes. He got a 780 on the verbal and a
            750 on the math. “One wrong on the verbal, three wrong on the math,”
            he muses. “I'm still convinced some of the questions were wrong.”`}
          </p>
        </div>
        <div className="mb-8">
          <p className="text-xs text-grey-300">Comments</p>
        </div>
        <CommentSection />
      </div>
      <CommentList />
    </div>
  );
};

export default Post;
