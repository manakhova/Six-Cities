import React from 'react';
import Header from '../header/header';

const LoadingScreen = () => {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container container">
            <p>Loading ...</p>
          </div>
        </div>
      </main>
    </div>

  );
};

export default LoadingScreen;
