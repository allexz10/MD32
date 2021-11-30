import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="notfound">
    <div className="notfound__content">
      <h1 style={{ fontSize: '40px', color: '#3b3a3a' }}>
        Oops that page can’t be found
      </h1>
      <img
        className="notfound__image"
        src="./monophy.gif"
        alt="lost"
      />
      <span
        style={{
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#3b3a3a',
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        404 error
      </span>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link className="link__back" to="/">
          home
        </Link>
      </div>
    </div>
  </div>
);
export default NotFound;
