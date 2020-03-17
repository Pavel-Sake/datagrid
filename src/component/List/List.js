import React from "react";
import './List.css'
import ListTitle from "../ListTitle/ListTitle";
import ListItems from "../ListMain/ListMain";


class List extends React.Component{

  render() {

    return (
      <div className='list'>
        <ListTitle/>
        <div className='list__spacer'></div>
        <ListItems/>

      </div>
    );
  }
}

export default List