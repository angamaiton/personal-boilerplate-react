/* eslint-disable global-require */

const { Home } = require('./home').default;

export default {
  path: '/',
  children: [
    Home
  ],
  async action({ next }) {
    const route = await next();
    route.title = `${route.title || 'Untitled Page'} - BOILERPLATE`;
    route.description = route.description || '';

    return route;
  },

};
