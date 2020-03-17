import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import cn from 'classnames'
import {setSortAscending} from '../../../store/actions'
import imgArrowUp from '../../../assets/icons/up-arrow.svg'
import imgArrowDown from '../../../assets/icons/down-arrow.svg'
import './SortAscending.css'


class SortAscending extends React.Component {
  constructor() {
    super();
    this.state = {
      isAscending2: true
    };
  }

  sortAscending = () => {
    const {setSortAscending, value, changeActiveBtn, id, isAscending} = this.props;

    changeActiveBtn(id);
    setSortAscending(isAscending, value);
  };

  render() {


    let imgArrow = imgArrowUp;

    const {id, isActive, isAscending} = this.props;

    if (isAscending) {
      imgArrow = imgArrowDown;
    }

    return (
      <button
        className={cn('sortAscending-btn sortAscending-btn--shadow', {'sortAscending-btn--active': isActive})}
        type='button'
        onClick={this.sortAscending}
      >
        <img
          className='sortAscending-img'
          src={imgArrow}/>
        Sort
      </button>
    );
  }
}

const putStateToProps = (state) => {
  return {
    setSortAscending: state.setSortAscending, // only sortData
  }
};

const putActionToProps = (dispatch) => {
  return {
    setSortAscending: bindActionCreators(setSortAscending, dispatch)
  }
};

export default connect(putStateToProps, putActionToProps)(SortAscending)