// module for formating dates
import moment from 'moment';

function Item({ post }) {
  return (
    <article className="Item">
      <img
        // removes the "?size=50x50&set=set1 from the string"
        // otherwise the link did not work
        src={post.author.avatar.slice(0, post.author.avatar.indexOf('?'))}
        alt="avatar"
      />
      <div className="item-content">
        <div className="title-summary">
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
        </div>
        <div className="author-date">
          <p>
            <strong>{post.author.name}</strong>
          </p>
          {/* moment formats the date in a "28th of September 2020" format*/}
          <p>{moment(post.publishDate).format('Do of MMMM YYYY')}</p>
        </div>
      </div>
    </article>
  );
}

export default function PostList({ posts }) {
  return (
    <div className="PostList">
      {posts.map((post) => (
        <Item key={post.id} post={post} />
      ))}
    </div>
  );
}
