import Post from "@/components/post";
import { redirect } from "next/navigation";

async function PostPage({
  params,
}: {
  params: Promise<{ "post-id": string }>;
}) {
  const postId = Number((await params)["post-id"]);

  if (!postId) redirect("/");

  return (
    <div className="py-9 px-4 bg-white h-full">
      <Post postId={postId} />
    </div>
  );
}

export default PostPage;
