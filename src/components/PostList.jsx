function Item({ post }) {
  return (
    <div className="item">
      <h2>{post.title}</h2>
      <p>{post.author.name}</p>
    </div>
  );
}

export default function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Item key={post.id} post={post} />
      ))}
    </div>
  );
}
