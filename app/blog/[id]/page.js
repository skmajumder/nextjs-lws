import { notFound } from "next/navigation";
import { blogPosts } from "../blogData";

export default function Page({ params }) {
  const { id } = params;
  const blogPost = blogPosts.find((blog) => blog.id === parseFloat(id));

  if (!blogPost) {
    notFound();
  }

  return (
    <div className="py-6">
      <h1 className="text-4xl font-thin underline-offset-2 mb-3">{blogPost?.title}</h1>
      <p className="text-base font-normal tracking-wide">{blogPost?.description}</p>
    </div>
  );
}
