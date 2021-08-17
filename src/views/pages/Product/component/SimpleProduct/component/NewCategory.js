import React from 'react'
import CategoriesMultiSelect from './component/CategoriesMultiSelect'
import { Link } from 'react-router-dom'
import options from "./component/CategoriesData"
import Select from 'react-dropdown-select';

export default function NewCategory() {
    return (
        <div>
            <div className="Done-btn-div">
                <Link to="/SimpleProduct"><button className="Done-btn" >Create</button></Link>
            </div>
            <hr/>
            <div>
                <h5>Category Name</h5>
                <input></input>
            </div>
            <div>
                <h5>Parent Category</h5>
                <Select
                    closeMenuOnSelect={false}
                    isMulti
                    options={options}
                    defaultValue={options[0]}
                />
            </div>
        </div>
    )
}
