import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryFilter from './CategoryFilter';
import DetailPage from './DetailPage';
import Footer from './Footer';
import Header from './Header';
import Page404 from './Page404';
import Pagination from './Pagination';
import PostList from './PostList';

/* THIS BRANCH IS FOR GITHUB PAGES ONLY! */
// data is imported from file instead of fetched
import Data from '../mock/data.json';

function App() {
  const [posts, setPosts] = useState([]);
  // Display All is a default chosen category
  const [filteredPosts, setFilteredPosts] = useState([]);
  // Pagination Setup
  const [currentPage, setCurrentPage] = useState(1);
  // 10 posts per page is set as default
  const [postsPerPage] = useState(6);

  // fetch data from the server
  useEffect(() => {
    // fetch(`${window.location.href}api/posts`, { mode: 'cors' })
    //   .then((response) => response.json())
    //   .then((data) => {
    // console.log(Data);
    setPosts(Data.posts);
    setFilteredPosts(Data.posts);
    // });
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
      // set current Page to 1
      setCurrentPage(1);
      // display filtered posts
      setFilteredPosts(newFilteredPosts);
    }
  }

  // Pagination setup:
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // slice the posts we want to show
  const currentFilteredPosts = filteredPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  if (posts) {
    // if posts are finished fetching
    return (
      <div className="App">
        <Header />
        <CategoryFilter
          posts={posts}
          handleChange={handleFilterChange}
          totalPosts={filteredPosts.length}
        />
        <div className="app-content">
          <Routes>
            <Route
              path="/"
              element={<PostList posts={currentFilteredPosts} />}
            />
            <Route path="/posts/:id" element={<DetailPage posts={posts} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={filteredPosts.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    );
  } else {
    // posts have not finished fetching
    return <div className="loading">Loading</div>;
  }
}

export default App;
