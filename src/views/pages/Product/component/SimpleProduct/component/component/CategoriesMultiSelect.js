import React from "react"
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import options from "./CategoriesData"
import ReactSelect from 'react-select'

const CategoriesMultiSelect = () => {
  return (
      <ReactSelect
        isMulti
        options={options}
        />
  )
}

export default CategoriesMultiSelect;