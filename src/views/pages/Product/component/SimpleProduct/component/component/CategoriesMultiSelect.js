import React from "react"
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import options from "./CategoriesData"
import Select from 'react-dropdown-select';



const CategoriesMultiSelect = () => {
  return (
      <ReactMultiSelectCheckboxes options={options}/>
  )
  
}

export default CategoriesMultiSelect;