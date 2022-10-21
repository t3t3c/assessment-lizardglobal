import { useEffect, useState } from 'react';
import CategoryFilter from './CategoryFilter';
import PostList from './PostList';

function App() {
  const [posts, setPosts] = useState([]);
  // Display All is a default chosen category
  const [filteredPosts, setFilteredPosts] = useState([]);

  // fetch data from the server
  useEffect(() => {
    fetch('http://localhost:3000/api/posts', { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
        setFilteredPosts(data.posts);
      });
  }, []);

  function handleFilterChange(e) {
    // take the value from the dropdown
    const value = e.target.value;
    if (value === 'Display All') {
      // display all posts
      setFilteredPosts(posts);
    } else {
      const newFilteredPosts = posts.filter((post) => {
        // if there is a category with the same name as chosen one,add the post
        for (const category of post.categories) {
          if (category.name === value) {
            return true;
          }
        }
        // this post did not have that category
        return false;
      });
      // display filtered posts
      setFilteredPosts(newFilteredPosts);
    }
  }

  if (posts) {
    return (
      <div>
        <CategoryFilter posts={posts} handleChange={handleFilterChange} />
        <PostList posts={filteredPosts} />
      </div>
    );
  } else {
    return <div className="loading">Loading</div>;
  }
}

export default App;
