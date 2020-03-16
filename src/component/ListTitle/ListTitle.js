import React from "react";
import ListTitleItem from "./ListTitleItem/ListTitleItem";
import './ListTitle.css'


class ListTitle extends React.Component {
  constructor() {
    super();

    this.state = {
      btn: [
        {id: 0, name: 'Name', value: 'name', isActive: false, isBtnSort: true, isAscending: true},
        {id: 1, name: 'Experience', value: 'workExperience', isActive: false, isBtnSort: true, isAscending: true},
        {id: 2, name: 'Status', value: 'status', isActive: false, isBtnSort: false, isAscending: true},
        {id: 3, name: 'Time', value: 'time', isActive: false, isBtnSort: true, isAscending: true},
        {id: 4, name: 'Data time', value: 'dataTime', isActive: false, isBtnSort: true, isAscending: true},
        {id: 5, name: 'Works remotely', value: 'worksRemotely', isActive: false, isBtnSort: false, isAscending: true},
        {id: 6, name: 'Pay', value: 'pay', isActive: false, isBtnSort: false, isAscending: true},
      ]
    }
  }

  changeActiveBtn = (id) => {
    console.log('id', id);

    this.setState((state) => {

      state.btn.map((item) => {
        item.isActive = false;

        if (item.id === id) {
          item.isActive = true;
          item.isAscending =  !item.isAscending;

        }});

      localStorage.setItem('btn', JSON.stringify(state.btn));

      return {
        btn: state.btn
      }
    })
  };

  render() {

    let btnData = JSON.parse(localStorage.getItem('btn'));
    console.log('btnData', btnData);

    if (!btnData) {
      btnData = this.state.btn
    }

    return (
      <ul className='list__listTitle list fixedBlock'>

        {
          btnData.map((item) => {

            return <ListTitleItem
              id={item.id}
              name={item.name}
              value={item.value}
              isActive={item.isActive}
              isBtnSort={item.isBtnSort}
              isAscending={item.isAscending}
              changeActiveBtn={this.changeActiveBtn}
              key={item.id}
            />
          })

        }

      </ul>
    );
  }
}

export default ListTitle