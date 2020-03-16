import React from "react";
import './ListCell.css'

class ListCell extends React.Component {
  constructor() {
    super();
  }

  render() {

    const {title} = this.props;
    let name = title;

    if (typeof title === 'object') {
      name = `${title.number}${title.currency}`
    }

    return (
      <li className='list__listCell'>{name}</li>
    );
  }
}

export default ListCell