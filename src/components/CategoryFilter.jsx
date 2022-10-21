import { useEffect, useState } from 'react';

export default function CategoryFilter({ posts, handleChange }) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    // iam am using a set so every value will be unique
    const newCategories = new Set();
    // add Display All option:
    newCategories.add('Display All');
    // create a set of categories, that will be displayed in a drop-down list
    posts.forEach((post) => {
      post.categories.forEach((category) => {
        newCategories.add(category.name);
      });
    });
    setCategories([...newCategories]);
    // add posts dependency in case the posts change
  }, [posts]);

  if (categories) {
    return (
      <div className="CategoryFilter">
        <p>Add filter:</p>
        <select name="categories" id="categories" onChange={handleChange}>
          {categories.map((categoryName) => (
            <option value={categoryName} key={categoryName}>
              {categoryName}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    return <div className="loading">loading</div>;
  }
}
