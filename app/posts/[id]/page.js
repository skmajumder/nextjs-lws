import getPost from "@/lib/getPost";
import { notFound } from "next/navigation";

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

  if (!post) {
    notFound();
  }

  return (
    <div>
      <article className="space-y-6">
        <h1 className="text-xl font-light tracking-wide">
          {post.title}
        </h1>
        <p>{post.body}</p>
      </article>
    </div>
  );
}
