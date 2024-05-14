import { notFound } from "next/navigation";
import { blogPosts } from "../blogData";

export default function Page({ params }) {
  const { id } = params;
  const blogPost = blogPosts.find((blog) => blog.id === parseFloat(id));

  if (!blogPost) {
    notFound();
  }

  return (
    <div>
      <h1>{blogPost?.title}</h1>
      <p>{blogPost?.description}</p>
    </div>
  );
}
