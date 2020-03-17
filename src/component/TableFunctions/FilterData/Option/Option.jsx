import React from "react";


function Option({value, selected}) {

  return (
    <option value={value} selected={selected}>{value}</option>
  )

}

export default Option