import React from "react";
import SortAscending from '../SortAscending/SortAscending'
import './ListTitleItem.css'



class ListTitleItem extends React.Component {

  render() {
const {id, name, value, isActive, isBtnSort, changeActiveBtn, isAscending} = this.props;

    return (
      <li className='listTitle__item'>
        <div className='listTitle__itemName title--shadow'>{name}</div>
        {
          isBtnSort ? <SortAscending
            id={id}
            value={value}
            isActive={isActive}
            isAscending={isAscending}
            changeActiveBtn={changeActiveBtn}
          /> : <div></div>
        }
      </li>
    );
  }
}

export default ListTitleItem