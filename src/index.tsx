import React from 'react';
import App from './components/app/app';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import { store } from './store';
import { fetchQuestsAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchQuestsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root'));
