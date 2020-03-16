import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataGrid from './DataGrid';
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from "./store/reducer";

export const SET_SEARCH = 'SET_SEARCH';
export const SET_FILTER = 'SET_FILTER';
export const SET_SORT_ASCENDING = 'SET_SORT_ASCENDING';
export const SET_FILTER_RADIO = 'SET_FILTER_RADIO';

export const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <DataGrid/>
  </Provider>
  , document.getElementById('root'));
