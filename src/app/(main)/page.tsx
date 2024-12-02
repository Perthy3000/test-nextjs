"use client";

import PostListItem from "@/components/postListItem";
import useGetPosts from "@/hooks/useGetPosts";
import { useEffect } from "react";

export default function Home() {
  const { data } = useGetPosts();

  useEffect(() => {
    console.log({ data });
  }, [data]);

  return (
    <div className="py-8 px-4">
      <div className="flex flex-col max-w-3xl">
        {data && data.length ? (
          data?.map((post) => (
            <PostListItem
              key={post.id}
              title={post.title}
              userId={post.userId}
              tag={post.tag}
              postId={post.id}
            />
          ))
        ) : (
          <p>No Posts</p>
        )}
      </div>
    </div>
  );
}