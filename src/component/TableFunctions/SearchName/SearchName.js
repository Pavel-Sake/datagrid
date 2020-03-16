import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './SearchName.css'
import { setSearch } from '../../../store/actions'


class SearchName extends React.Component {
  constructor() {
    super();
  }

  handleChangeName = (name) => {
    const { setSearch } = this.props;

    localStorage.setItem('value', name);

    setSearch(name);
  };

  render() {

    let value = localStorage.getItem('value');

    if (!value) {
      value = '';
    }

    return (
      <div className='searchName table-functions__item'>
        <label className='searchName__label title--shadow'>Search name</label>
        <input className='table-functions__inputSearch'
          type='text'
          placeholder='search'
               value={value}
          onChange={(event) => {this.handleChangeName(event.target.value)}}
        />
      </div>
    );
  }
}

const putStateToProps = (state) => {
  return {
    state: state
  }
};

const putActionToProps = (dispatch) => {
  return  {
    setSearch: bindActionCreators(setSearch, dispatch)
  }

};

export default connect(putStateToProps, putActionToProps)(SearchName)
