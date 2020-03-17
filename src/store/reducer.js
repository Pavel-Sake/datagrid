import React from "react";
import { SET_SEARCH, SET_FILTER, SET_SORT_ASCENDING, SET_FILTER_RADIO } from '../index'


let initialState = JSON.parse(localStorage.getItem('state'));

if (!initialState) {

  initialState = {
    search: '',
    filterData: null,
    sortData: null,
    sortDataAscending: null,

  };
}


const reducer = (state= initialState, action) => {

  switch (action.type) {
    case SET_SEARCH:

      return {
        ...state,
        search: action.payload,
      };

    case SET_FILTER:

      return {
        ...state,
        filterData: action.payload,
      };

    case SET_SORT_ASCENDING:

      return {
        ...state,
        sortDataAscending:{
          isAscending: action.payload,
          value: action.payload2
        }
      };

    case SET_FILTER_RADIO:

      return {
        ...state,
        filterRadioValue: action.payload
      };

    default:
      return state;
  }
};


export default reducer