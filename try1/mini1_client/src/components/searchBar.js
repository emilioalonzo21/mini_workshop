import React, { useState } from "react";

import React from 'react'

export const ListItem = ({name, url, handleCheckBoxChange, checked}) => {
  return (
    <div className='list-item'>
      <input className='form-check-input checkbox' type="checkbox" onChange={handleCheckBoxChange} checked={checked}/>
      <img src={url} alt={name}/>
      <h3 className='drink-name'>{name}</h3>
    </div>
  )
}
export default searchBar;