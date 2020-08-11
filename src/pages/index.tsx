import React from 'react';
import { Helmet } from 'react-helmet';
import App from 'components/App';
import { headData } from 'mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio with Typescript & Emotion'}</title>
        <html lang={lang || 'en'} />
        <meta
          name="description"
          content={description || 'Gatsby Simplefolio with Typescript & Emotion'}
        />
      </Helmet>
      <App />
    </>
  );
};
