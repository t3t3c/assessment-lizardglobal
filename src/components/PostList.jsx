// module for formating dates
import moment from 'moment';

function Item({ post }) {
  return (
    <article className="item">
      <h3>{post.title}</h3>
      <p>{post.author.name}</p>
      <img
        // removes the "?size=50x50&set=set1 from the string"
        // otherwise the link did not work
        src={post.author.avatar.slice(0, post.author.avatar.indexOf('?'))}
        alt="avatar"
      />
      {/* moment formats the date in a "28th of September 2020" format*/}
      <p>{moment(post.publishDate).format('Do of MMMM YYYY')}</p>
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
