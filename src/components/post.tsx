"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import CommentList from "./comment/commentList";
import CommentSection from "./comment/commentSection";
import useGetPostWithComment from "@/hooks/useGetPostWithComment";

interface IPostProps {
  postId: number;
}

const Post = ({ postId }: IPostProps) => {
  const { data, isLoading } = useGetPostWithComment(postId);

  if (isLoading) return <p>Loading</p>;

  if (!data) return <p>No Post</p>;

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
          <Badge>{data.tag}</Badge>
        </div>
        <div className="mb-7">
          <h4 className="text-3xl font-semibold mb-4">{data.title}</h4>
          <p className="text-xs">{data.content}</p>
        </div>
        <div className="mb-8">
          <p className="text-xs text-grey-300">
            {data.comments.length} Comments
          </p>
        </div>
        <CommentSection />
      </div>
      <CommentList comments={data.comments} />
    </div>
  );
};

export default Post;
