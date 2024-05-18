export default async function getAllPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10",
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts", error);
    return [];
  }
}
