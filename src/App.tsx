import { Routes, Route, Link } from 'react-router-dom';
import { useGetAllCategoriesQuery } from './services/jokes';
import './App.scss';
import Home from './pages/Home';
import Jokes from './pages/Jokes';
import Joke from './pages/Joke';
import NotFound from './pages/NotFound';

const App = () => {
  const { isLoading, isError, data } = useGetAllCategoriesQuery(undefined);

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <div className="container">
      <nav className="nav">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {data?.categories.map((category) => (
              <Link
                className="nav__link"
                to={`jokes/${category}`}
                key={category}
              >
                {category}
              </Link>
            ))}
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jokes/:category" element={<Jokes />} />
        <Route path="jokes/:category/joke:jokeId" element={<Joke />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
