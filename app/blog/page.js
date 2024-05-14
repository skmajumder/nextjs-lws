import Link from "next/link";
import { blogPosts } from "./blogData";

export default function Blogs() {
  return (
    <main className="mt-10">
      <h1 className="text-3xl font-semibold my-4">Blog page</h1>
      <ul className="space-y-4">
        {blogPosts.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
