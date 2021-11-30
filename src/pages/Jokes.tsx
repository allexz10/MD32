import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useGetJokesByCategoryQuery } from '../services/jokes';

const Jokes = () => {
  const { category } = useParams<'category'>() as { category: string };
  const { isLoading, data } = useGetJokesByCategoryQuery(category);

  if (data?.error) {
    return (
      <div className="data__missing">
        <h1 className="isError">Sorry, data are missing</h1>
        <img
          src="/monophy.gif"
          alt="lost"
        />
      </div>
    );
  }

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="jokes">
          {data?.jokes.map(({ joke, id }) => (
            <div className="jokes__wrapper" key={id}>
              <Link
                className="jokes__link"
                to={`/jokes/${category}/joke${id}`}
                key={id}
              >
                {joke}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jokes;
