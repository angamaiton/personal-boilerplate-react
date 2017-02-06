export default {
  path: '/',
  children: [

  ],
  async action({ next }) {
    const route = await next();
    route.title = `${route.title || 'Untitled Page'} - BOILERPLATE`;
    route.description = route.description || '';

    return route;
  },

};
