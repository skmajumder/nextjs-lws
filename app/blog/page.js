import Link from "next/link";

export default function Blogs() {
  const blogPosts = [
    {
      id: 10,
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language.",
      author: "John Doe",
      publishDate: "2024-05-12",
    },
    {
      id: 11,
      title: "Mastering React.js",
      description:
        "Advanced techniques and best practices in React.js development.",
      author: "Jane Smith",
      publishDate: "2024-05-10",
    },
    {
      id: 12,
      title: "Deep Dive into Node.js",
      description: "Explore the core concepts of Node.js and its ecosystem.",
      author: "Alex Johnson",
      publishDate: "2024-05-08",
    },
    {
      id: 13,
      title: "CSS Tricks for Beautiful Designs",
      description:
        "Tips and tricks to enhance your CSS skills and create stunning designs.",
      author: "Emily Brown",
      publishDate: "2024-05-06",
    },
    {
      id: 14,
      title: "Getting Started with Python",
      description: "A beginner's guide to Python programming language.",
      author: "Michael Wilson",
      publishDate: "2024-05-04",
    },
    {
      id: 15,
      title: "The Power of Data Science",
      description: "Unlock the potential of data science and its applications.",
      author: "Sophia Garcia",
      publishDate: "2024-05-02",
    },
    {
      id: 16,
      title: "Exploring UI/UX Design Principles",
      description:
        "Understanding the fundamentals of UI/UX design for better user experiences.",
      author: "William Taylor",
      publishDate: "2024-04-30",
    },
    {
      id: 17,
      title: "JavaScript Frameworks Comparison",
      description:
        "Comparing popular JavaScript frameworks: Angular, React, and Vue.",
      author: "Olivia Martinez",
      publishDate: "2024-04-28",
    },
    {
      id: 18,
      title: "Web Security Best Practices",
      description:
        "Essential security practices to protect your web applications from threats.",
      author: "Ethan Adams",
      publishDate: "2024-04-26",
    },
    {
      id: 19,
      title: "Introduction to Machine Learning",
      description: "An overview of machine learning concepts and algorithms.",
      author: "Ava Anderson",
      publishDate: "2024-04-24",
    },
  ];

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
