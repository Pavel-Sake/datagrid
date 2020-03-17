import React from "react";
import './TableFunctions.css'
import SearchName from "./SearchName/SearchName";
import FilterData from "./FilterData/FilterData";
import FilterRadioData from "./FilterRadioData/FilterRadioData";


class TableFunctions extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='table-functions fixedBlock'>
        <SearchName/>
        <FilterData/>
        <FilterRadioData/>
      </div>
    );
  }
}

export default TableFunctions