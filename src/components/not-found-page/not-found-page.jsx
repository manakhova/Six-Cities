import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';

const NotFoundPage = () => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index page__main--index-empty" style={{margin: `10px 50px`}}>
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </main>
    </div>
  );
};

export default NotFoundPage;
