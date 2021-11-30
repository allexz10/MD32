import { useParams, useNavigate } from 'react-router-dom';
import { useGetJokeByIdQuery } from '../services/jokes';

const Joke = () => {
  const { jokeId } = useParams<'jokeId'>() as { jokeId: string };

  const { isLoading, data } = useGetJokeByIdQuery(jokeId);
  const navigate = useNavigate();

  if (data?.error) {
    navigate('../..404');
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="wrapper">
          <div className="joke">
            <p className="joke__category">{`Category: ${data?.category}`}</p>
            <p className="joke__joke">{data?.joke}</p>
            <p className="joke__type">{`Type: ${data?.type}`}</p>
            <p className="joke__id">{`ID: ${data?.id}`}</p>
            <p className="joke__safe">
              {`Safe: ${
                data?.safe ? 'true' : 'false'
              }`}

            </p>
            <p className="joke__lang">{`Language: ${data?.lang}`}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Joke;
