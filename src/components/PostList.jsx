

export default function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.author.name}</p>
        </div>
      ))}
    </div>
  );
}
