import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import './LogInForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();


    const demoUser = () => {
    const credential = 'Demo-lition';
    const password = 'password';
    history.push('/home')
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='innerForm'>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>

      <div className='credentials'>
        <label>
          Username or Email
        </label>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </div>

      <div className='credentials'>
      <label>
        Password
      </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className='credentials'>
      <button type="submit">Go!</button>
      <button type="button" onClick={demoUser}>Demo</button>
      </div>

      </div>
    </form>
  );
}

export default LoginForm;