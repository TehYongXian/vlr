import React from 'react'
import { Pagination } from '@material-ui/lab'
import { Link } from 'react-router-dom'

export default function AddSelectPro() {
    return (
        <div className="AddSelectPro-container">
            <hr/>
            <div className="AddSelectPro-header">
                
                <Link className="AddSelectPro-header-item" to="/SimpleProduct"><button className="AddSelectPro-header-item-button">Add Selected Products</button></Link>
                <Link className="AddSelectPro-header-item" to="/SimpleProduct"><a>Cancle</a></Link>
            </div>
            <hr/>
            <div className="AddSelectPro-table-filter">
                <button className="AddSelectPro-table-filter-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="c-icon c-icon-1xl" role="img"><path fill="var(--ci-primary-color, currentColor)" d="M238.627,496H192V253.828l-168-200V16H480V53.612l-160,200V414.627ZM224,464h1.373L288,401.373V242.388L443.51,48H60.9L224,242.172Z" class="ci-primary"></path></svg>Filter</button>
            </div>
            <div className="SimpleProduct-container">
                <div  className="SimpleProduct-container_S1">
                    <div  className="AddSelectPro-table-tool">
                        <small>0 records found</small>
                    </div>

                    <div className="AddSelectPro-table-tool2">
                        <select className="AddSelectPro-table-tool2-select">
                            <option selected>
                                20
                            </option>
                        </select>
                        <label>per page</label>

                        <Pagination />
                    </div>

                    
                </div>
                <table>

                    <thead className="tableHead">
                        <th><input type="checkbox"></input></th>
                        <th>ID</th>
                        <th>Thumbnail</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Attribute Set</th>
                        <th>SKU</th>
                        <th>Price</th>

                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox"></input></td>
                            <td><p>1</p></td>
                            <td><img width="50px" height="50px"></img></td>
                            <td><p>Product Name</p></td>
                            <td><p>Product Type</p></td>
                            <td><p>Bag</p></td>
                            <td><p>24-MB01</p></td>
                            <td><p>Price</p></td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
