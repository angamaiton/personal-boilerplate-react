import * as React from 'react';
import Home from './Home';

const title: string = 'Home';

export default {
  path: '/',

  action() {
    return {
      title,
      component: <Home title={title} />,
    };
  },

};