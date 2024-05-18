import Comments from "@/app/components/Comments";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// * Dynamic metadata
export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title || "Single post",
    description: post.body || "Single post description",
  };
}

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await getPost(id);
  const commentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-5">
      <article className="space-y-6">
        <h1 className="text-xl font-semibold tracking-wide">{post.title}</h1>
        <p>{post.body}</p>
      </article>

      <Suspense fallback="<h1>Loading comments...</h1>">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}
