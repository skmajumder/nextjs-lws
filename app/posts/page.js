import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <div className="mt-6">
      <h1 className="text-4xl font-light mb-6">All Post</h1>

      <div className="space-y-5">
        {posts.map((post) => (
          <article key={post.id}>
            <h2 className="text-xl font-light tracking-wide">
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
          </article>
        ))}
      </div>
    </div>
  );
}
