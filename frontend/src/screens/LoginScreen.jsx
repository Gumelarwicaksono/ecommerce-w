import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

const LoginScreen = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <div className="container small-container">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h3>Login</h3>
      <form action="">
        <div className="mb-3 row">
          <label for="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="email" />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="password" />
          </div>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <div className="mb-3">
          New customer? {` `}
          <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
