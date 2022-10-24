import { Link } from 'react-router-dom';
import '../styles/Page404.css';

export default function Page404() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Could not find requested page</p>
      <button>
        <Link className="link" to="/">
          Go back
        </Link>
      </button>
    </div>
  );
}
