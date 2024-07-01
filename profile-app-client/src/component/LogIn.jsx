import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextWrapper';
import service from '../service/api';
function LogIn() {
  const [formData, setFormData] = useState({
    password: '',
    username: '',
  });
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const { password, username } = formData;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Name: </label>
        <input type="name" id="name" value={username} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="username">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <p className="error">{errorMessage}</p>

      <p>
        No account? <Link to={'/login'}>Sign up!</Link>
      </p>
      <button>Login</button>
    </form>
  );
}

export default LogIn;
