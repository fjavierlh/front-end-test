import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFoundView = () => {
  return (
    <div>
      <h1>Page not found :(</h1>
      <Link to="/">Go to home page</Link>
    </div>
  );
};
