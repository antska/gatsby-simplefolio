import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from 'components/App';
import { headData } from 'mock/data';
import SEO from 'components/SEO';

export default () => {
  const { title, description } = headData;

  return (
    <>
      <SEO title={title} description={description} type="Organization" />
      <App />
    </>
  );
};
