function Item({ post }) {
  return (
    <article className="item">
      <h2>{post.title}</h2>
      <p>{post.author.name}</p>
    </article>
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
