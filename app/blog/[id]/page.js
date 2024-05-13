export default function Page({ params }) {
  const { id } = params;
  return (
    <div>
      <h1>Blog post ID: {id}</h1>
    </div>
  );
}
