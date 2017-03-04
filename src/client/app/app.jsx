import { render } from 'react-dom';
import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import rootReducer from './redux/reducers/rootReducer';

import Container from './components/container/container';
import AppNavbar from './components/navbar/appnavbar';
import ProgressBar from './components/progressBar/progressBar';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators or immutablejs support
}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

const App = () => (
  <div>
    <AppNavbar brand="React Progress Bar" />
    <Container>
      <PageHeader>React Progress Bar</PageHeader>
      <p>A ReactJS Progress Bar project that supports JavaScript ES7
         transpilation to ES5 through Babel, linting with ESLint,
       and bundling via Webpack.</p>
      <ProgressBar />
    </Container>
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
