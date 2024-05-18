export default async function getPostComments(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    if (!response.ok)
      throw new Error("Error! Check Id number or Network response was not ok");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch.", error);
  }
}
