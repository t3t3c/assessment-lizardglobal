import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/DetailPage.css';

function DetailView({ detailedPost }) {
  if (detailedPost) {
    return (
      <article className="DetailView">
        <img
          // removes the "?size=50x50&set=set1 from the string"
          // otherwise the link did not work
          src={detailedPost.author.avatar.slice(
            0,
            detailedPost.author.avatar.indexOf('?')
          )}
          alt="avatar"
        />
        <h3>Author: {detailedPost.author.name}</h3>
        <p>
          Published at:{' '}
          {moment(detailedPost.publishDate).format('Do of MMMM YYYY')}
        </p>

        <div className="content-container">
          <h1>{detailedPost.title}</h1>
          <p>{detailedPost.summary}</p>
        </div>
        <button>
          <Link to="/">Go back</Link>
        </button>
      </article>
    );
  } else {
    return <div className="loading">Loading</div>;
  }
}

export default function DetailPage({ posts }) {
  const [detailedPost, setDetailedPost] = useState({});
  const [loading, setLoading] = useState(true);
  // take the id from the url
  const { id } = useParams();
  // find and return element with the same id
  useEffect(() => {
    setDetailedPost(posts.filter((post) => post.id === id)[0]);
    setLoading(false);
  }, [posts, id]);

  if (!loading) {
    return (
      <div className="DetailPage">
        <DetailView detailedPost={detailedPost} />
      </div>
    );
  } else {
    return <div className="loading">Loading</div>;
  }
}
