import React from "react";
import cn from 'classnames';
import ListCell from "./ListCell/ListCell";

import './ListRow.css'

class ListRow extends React.Component {
  constructor() {
    super();

    this.state = {
      isWhiteRow: true,
      isGreyRow: false
    }
  }


  render() {
    const {data, number, id} = this.props;

    const arrayData = [];
    const keysForList = [];

    let isColorWhite = true;
    let isColorGrey = false;

    if (number % 2 !== 0) {
      isColorWhite = !isColorWhite;
      isColorGrey = !isColorGrey;
    }


    let options = {
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    let options2 = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    for (let key in data) {

      if (key === 'time') {
        const date = new Date(data[key]);

        arrayData.push(date.toLocaleString('ru', options))
      }

      if (key === 'dataTime') {

        const date = new Date(data[key]);

        arrayData.push(date.toLocaleString('ru', options2))
      }

      if(key !== 'time' && key !== 'dataTime' && key !== 'id') {
        arrayData.push(data[key])
      }

    }

    return (
      <ul className={cn('listMain__listRow list',
        {'listMain__listRow--colorWhite': isColorWhite,
        'listMain__listRow--colorGrey': isColorGrey
        })}>
        {
          arrayData.map((item, idx) => {

            return ( <ListCell
              title={item}
              key={id * (idx + 1)}

            /> )
          })
        }
      </ul>
    );
  }

}

export default ListRow