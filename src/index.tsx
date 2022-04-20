import React from 'react';
import App from './components/app/app';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root'));
