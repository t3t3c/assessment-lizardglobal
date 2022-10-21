import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/posts', { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return <div></div>;
}

export default App;
