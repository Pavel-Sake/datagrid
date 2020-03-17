import React from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {setFilter} from '../../../store/actions'
import Option from "./Option/Option";
import './FilterData.css'


class FilterData extends React.Component {
  constructor() {
    super();
    this.state = {
      optionsData: [
        {id: 1, value: 'all', selected: true},
        {id: 2, value: 'good', selected: false},
        {id: 3, value: 'bad', selected: false},
        {id: 4, value: 'normal', selected: false},
      ]
    }
  }

  onHandleChange = (event) => {
    const {value, options, selectedIndex} = event.target;

    const {filterStatus} = this.props;

    this.setState((state) => {

      state.optionsData.map((item, idx) => {
        item.selected = false;

        if (idx === selectedIndex) {
          item.selected = !item.selected
        }
      });

      localStorage.setItem('options', JSON.stringify(state.optionsData));

      return {
        optionsData: state.optionsData
      }
    });

    filterStatus(value)
  };

  render() {

    let options = JSON.parse(localStorage.getItem('options'));

    if (!options) {
      options = this.state.optionsData;
    }


    return (
      <div className='table-functions__item'>
        <label className='select__label title--shadow'>Sort status</label>
        <select
          className='table-functions__select'
          onChange={(event) => {
            this.onHandleChange(event)
          }}
        >
          {options.map((item) => {
            return (
              <Option
              value={item.value}
              selected={item.selected}
              key={item.id}
              />)
          })}
        </select>
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
  return {
    filterStatus: bindActionCreators(setFilter, dispatch)
  }

};

export default connect(putStateToProps, putActionToProps)(FilterData);