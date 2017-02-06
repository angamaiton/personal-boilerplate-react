import React from 'react';
import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
// import history from './core/history';
// import App from './components/App';

const DOM_APP_ID = 'app';
const container = document.getElementById(DOM_APP_ID);
let appInstance;
let routes = require('./routes').default;

async function onLocationChange(location) {
  try {
    const route = await UniversalRouter.resolve(routes, {

    });

    appInstance = ReactDOM.render(
      <App>{route.component}</App>,
      container,
    );
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
}
