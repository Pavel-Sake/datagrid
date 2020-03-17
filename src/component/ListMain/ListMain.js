import React from "react";
import initialData from '../../data'
import {connect} from 'react-redux'
import ListRow from "./ListRow/ListRow";
import './ListMain.css'


class ListMain extends React.Component {
  constructor() {
    super();
  }

  applyAllFilters = (data) => {
    const {search, filterData, sortDataAscending, filterRadioValue} = this.props;

    let newData = data;

    if (search) {
      newData = this.applySearch(newData, search);
    }

    if (filterData) {
      newData = this.applyFilterStatus(newData, filterData);
    }

    if (sortDataAscending) {
      const {isAscending, value} = sortDataAscending;

      newData = this.applySortAscending(newData, isAscending, value);
    }

    if (filterRadioValue) {
      newData = this.applyFilterWorkExperience(newData, filterRadioValue);
    }

    return newData;
  };


  applySearch = (data, search) => {

    const newData = data.filter((item) => {
      const itemNameUpperCase = item.name.toUpperCase();
      const nameUpperCase = search.toUpperCase();

      return itemNameUpperCase.includes(nameUpperCase);
    });

    return newData;
  };

  applyFilterStatus = (data, sortData) => {

    const newData = data.filter((item) => {
      return item.status === sortData
    });

    if (sortData === 'all') {
      return data
    }

    return newData
  };

  applySortAscending = (data, isAscending, key) => {
    let newData = null;

    if (isAscending) {

      newData = data.sort((a, b) => {

        if (a[key] < b[key]) {
          return -1
        }

        if (a[key] > b[key]) {
          return 1
        }

        return 0
      });
    } else {
      newData = data.sort((a, b) => {

        if (a[key] < b[key]) {
          return 1
        }

        if (a[key] > b[key]) {
          return -1
        }

        return 0
      });
    }

    return newData
  };


  applyFilterWorkExperience = (data, value) => {

    if (value === 'all') {
      return data
    }

    const newData = data.filter((item) => {
      return item.isWorksRemotely === value
    });

    return newData
  };


  render() {

    let dataStorage = JSON.parse(localStorage.getItem('data'));
    localStorage.setItem('state', JSON.stringify(this.props));

    if (!dataStorage) {
      dataStorage = initialData;

      localStorage.setItem('data', JSON.stringify(dataStorage))
    }

    const data = this.applyAllFilters(dataStorage);

    return (
      <ul className='list-main list'>
        {
          data.map((item, idx) => {

            return (
              <ListRow
                data={item}
                number={idx}
                id={item.id}
                key={item.id}
              />
            )
          })
        }
      </ul>
    );
  }
}


const putStateToProps = (state) => {
  return {
    search: state.search,
    filterData: state.filterData,
    sortDataAscending: state.sortDataAscending,
    filterRadioValue: state.filterRadioValue
  };
};

export default connect(putStateToProps)(ListMain);