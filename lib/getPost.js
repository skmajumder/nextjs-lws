export default async function getPost(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const post = await response.json();
    return post;
  } catch (error) {
    console.error("Failed to fetch posts", error);
    return null;
  }
}
