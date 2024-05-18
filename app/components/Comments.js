async function Comments({ promise }) {
  const comments = await promise;

  return (
    <div>
      <h2 className="mb-5 font-semibold">Comments: </h2>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
