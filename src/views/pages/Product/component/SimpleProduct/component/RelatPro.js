import React from 'react'
import { Link } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CPagination
  } from '@coreui/react'



export default function RelatPro() {

    return (
        <div className="SimpleProduct-container">
            <div className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left2">
                    <b>Related Products</b>
                    <p>Related products are shown to customers in addition to the item the customer is looking at.</p>
                </div>
                <div className="SimpleProduct-container_noflex">
                    <Link to="/AddSelectPro"><button className="SimpleProduct-container_button">Add Related Products</button></Link>
                </div>
            </div>
            <div className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left2">
                    <b>Up-sell Products</b>
                    <p>An up-sell item is offered to the customer as a pricier or higer-quality alternative to the product the customer is looking at.</p>
                </div>
                <div className="SimpleProduct-container_noflex">
                    <Link to="/AddUpSell"><button className="SimpleProduct-container_button">Add Up-Sell Products</button></Link>
                </div>
                {/* <div>
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
                </div> */}
            </div>
            <div  className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left2">
                    <b>Cross-Sell Products</b>
                    <p>There "impulse-buy" products appear next to the shopping cart as cross-sells to the items already in the shopping cart.</p>
                </div>
                <div className="SimpleProduct-container_noflex">
                    <Link to="CrossSell"><button className="SimpleProduct-container_button">Add Cross-Sell Products</button></Link>
                </div>
                {/* <div>
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
                </div> */}
            </div>
        </div>
    )
}
