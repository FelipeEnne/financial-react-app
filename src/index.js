import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';

const root = document.getElementById('root');

const initialState = {
  market: [{
    symbol: '^RUATR',
    name: 'Russell 3000 Total Return',
    price: 9805.96400000,
    changesPercentage: -0.31000000,
    change: -30.91100000,
    dayLow: 9736.05000000,
    dayHigh: 9856.27900000,
    yearHigh: 9856.27900000,
    yearLow: 9736.05000000,
    marketCap: null,
    priceAvg50: null,
    priceAvg200: null,
    volume: 0,
    avgVolume: null,
    exchange: 'INDEX',
    open: 9830.31900000,
    previousClose: 9836.87500000,
    eps: null,
    pe: null,
    earningsAnnouncement: null,
    sharesOutstanding: null,
    timestamp: 1591316500,
  }],

  status: { loading: false, errors: [] },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
