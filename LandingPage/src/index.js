import React from 'react';
import ReactDOM from 'react-dom/client';
import IntroPage from './components/intro_page/IntroPage';
import AboutPage from './components/about/AboutPage';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <IntroPage></IntroPage>
    <AboutPage></AboutPage>
  </>
);
