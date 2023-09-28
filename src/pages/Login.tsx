import { FormEvent, useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/api/login', {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        console.log('Login successful', response.data);
      })
      .catch((error) => {
        console.error('Login failed', error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input
          type='text'
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label>Password:</label>
        <input
          type='password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
