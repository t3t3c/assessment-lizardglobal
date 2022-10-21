import { useEffect, useState } from 'react';
import PostList from './PostList';

function CategoryFilter({ posts }) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    // iam am using a set so every value will be unique
    const newCategories = new Set();
    // create a set of categories, that will be displayed in a drop-down list
    posts.forEach((post) => {
      post.categories.forEach((category) => {
        newCategories.add(category.name);
      });
    });
    setCategories([...newCategories]);
    // add posts dependency in case they change
  }, [posts]);

  if (categories) {
    return (
      <>
        <select name="categories" id="categories">
          {categories.map((categoryName) => (
            <option value={categoryName} key={categoryName}>
              {categoryName}
            </option>
          ))}
        </select>
      </>
    );
  } else {
    return <div className="loading">loading</div>;
  }
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/posts', { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
  }, []);

  if (posts) {
    return (
      <div>
        <CategoryFilter posts={posts} />
        <PostList posts={posts} />
      </div>
    );
  } else {
    return <div className="loading">Loading</div>;
  }
}

export default App;

// implement a category filter:
// first a single-select
// 1. extract category data from posts and create a state of it
// refactor to if posts
