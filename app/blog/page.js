import Link from "next/link";
import { blogPosts } from "./blogData";

export default function Blogs() {
  return (
    <main className="mt-10">
      <h1 className="text-4xl font-medium underline-offset-2 my-4">
        Blog page
      </h1>
      <ul className="space-y-4">
        {blogPosts.map((blog) => (
          <li key={blog.id}>
            <h3>
              <Link
                href={`/blog/${blog.id}`}
                className="text-2xl font-thin hover:underline underline-offset-2"
              >
                {blog.title}
              </Link>
            </h3>
          </li>
        ))}
      </ul>
    </main>
  );
}
