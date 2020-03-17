import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFilterRadio } from '../../../store/actions'
import RadioItem from "./RadioItem/RadioItem";
import './FilterRadioData.css'


class FilterRadioData extends React.Component {

  constructor() {
    super();

    this.state = {
      radioData: [
        {id: 1, value: 'all', checked: true},
        {id: 2, value: 'true', checked: false},
        {id: 3, value: 'false', checked: false},
      ]
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
  };

  onHandleChangeFilter = (event) => {
    const {setFilterRadio} = this.props;
    const value = event.target.value;

    this.setState((state) => {

      state.radioData.map((item) => {
        item.checked = false;

        if (item.value === value) {
          item.checked = !item.checked
        }
      });

      localStorage.setItem('radio', JSON.stringify(state.radioData));

      return {
        radioData: state.radioData
      }
    });

    setFilterRadio(value)
  };

  render() {
    let data = JSON.parse(localStorage.getItem('radio'));

    if (!data) {
      data = this.state.radioData
    }


    return (
      <div className='table-functions__item'>
        <div className='label__radio title--shadow'>Works remotely</div>
        <form className='formRadio'
              onSubmit={this.onSubmit}>

          {
            data.map((item) => {
              return (
                <RadioItem
                value={item.value}
                checked={item.checked}
                key={item.id}
                onChange={this.onHandleChangeFilter}
                />
              )
            })
          }
        </form>
      </div>
    );
  }
}

const putStateToProps = (state) => {

  return {
    setFilterRadio: state.setFilterRadio
  }
};

const putActionToProps = (dispatch) => {

  return {
    setFilterRadio: bindActionCreators(setFilterRadio, dispatch)
  }
};


export default connect(putStateToProps, putActionToProps)(FilterRadioData);