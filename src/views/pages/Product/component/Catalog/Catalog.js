import { Icon as icon } from '@material-ui/core'
import React, { Component } from 'react'
import { Pagination } from '@material-ui/lab'
import Header from '../header/Header'

export default class Catalog extends Component {
    render() {
        return (
            <div className="Catalog-container">
                <div className="Catalog-container_Header">
                    <header className="Catalog-container_Header-section1">
                        <Header/>
                    </header>
                </div>

                    <div className="Catalog-container-section2">
                        <div className="Catalog-container-section2_1" >
                            <div className="Catalog-container-section2_1-1">
                                <button className="Catalog-container-section2-filter"><icon></icon> Filters</button>
                            </div>
                            
                            <div className="Catalog-container-section2_1-2">
                                <icon></icon>
                                <select>
                                    <option selected="selected">
                                        Default View
                                    </option>
                                </select>
                            </div>
                            |
                            <div className="Catalog-container-section2_1-3">
                                <icon></icon>
                                <select>
                                    <option selected="selected">
                                        Columns
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="Catalog-container-section2_2">
                            <div className="Catalog-container-section2_2-1">
                                <select>
                                    <option selected="selected">
                                        option
                                    </option>
                                </select>
                                <div>
                                    xxxx records
                                </div>
                            </div>
                            <div className="Catalog-container-section2_2-2">
                                <select>
                                    <option selected="selected">
                                        100
                                    </option>
                                </select>
                                <Pagination />
                            </div>
                        </div>
                        <table  className="tableHead-catalog-table">
                            <thead className="tableHead-catalog">
                                <th className="tableHead-catalog th"><input type="checkbox"></input></th>
                                <th className="tableHead-catalog th">ID</th>
                                <th className="tableHead-catalog th">Thumbnail</th>
                                <th className="tableHead-catalog th">Name</th>
                                <th className="tableHead-catalog th">Type</th>
                                <th className="tableHead-catalog th">Attribute Set</th>
                                <th className="tableHead-catalog th">SKU</th>
                                <th className="tableHead-catalog th">Price</th>
                                <th className="tableHead-catalog th">Quantity</th>
                                <th className="tableHead-catalog th">Visibility</th>
                                <th className="tableHead-catalog th">Status</th>
                                <th className="tableHead-catalog th">Websites</th>
                                <th className="tableHead-catalog th">Action</th>
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
                                    <td><p>100</p></td>
                                    <td><p>Catalog, Search</p></td>
                                    <td><p>Enabled</p></td>
                                    <td><p>Main Website</p></td>
                                    <td><a href="/">Edit</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}
