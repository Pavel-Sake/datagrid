import React from "react";


function RadioItem({value, onChange, checked}) {

  return (
    <div>
      <label htmlFor='value'>{value}</label>
      <input
        type='radio'
        id={value}
        checked={checked}
        name='filterRadioData'
        value={value}
        onChange={(event) => {
          onChange(event)
        }}
      />
    </div>
  )
}

export default RadioItem