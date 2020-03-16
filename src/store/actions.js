import { SET_SEARCH, SET_FILTER, SET_SORT_ASCENDING, SET_FILTER_RADIO } from '../index'

const setSearch = (name) => {
  return {
    type: SET_SEARCH,
    payload: name,
  }
};

const setFilter = (value) => {
  return {
    type: SET_FILTER,
    payload: value,
  }
};

const setSortAscending = (boolean, value) => {
  return {
    type: SET_SORT_ASCENDING,
    payload: boolean,
    payload2: value,
  }
};

const setFilterRadio = (value) => {
  return {
    type: SET_FILTER_RADIO,
    payload: value
  }
};


export { setSearch, setFilter, setSortAscending, setFilterRadio }