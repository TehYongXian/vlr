import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AdvancePrice extends Component {
    state = {
        addInputField: []
    }

    addNewRow() {
        this.setState({ addInputField: [...this.state.addInputField, ""] })
    }
    render() {
        return (
            <div className="SimpleProduct-container">

                <div className="Done-btn-div">
                    <Link to="/SimpleProduct"><button className="Done-btn" >Done</button></Link>
                </div>
                <hr />
                <div className="SimpleProduct-container_S1">
                    <div className="SimpleProduct-container_left">
                        <p className="SimpleProduct-container_p">Speacial Price</p>
                        <small className="SimpleProduct-container_small">[global]</small>
                    </div>

                    <div className="placeHolder-moneySim SimpleProduct-container_right" data-placeholder="$">
                        <input type="text" className="fix-placeholder"></input>
                    </div>
                </div>
                <div className="SimpleProduct-container_S1">
                    {/* need remove the placeholder */}
                    <div className="SimpleProduct-container_left">
                        <p className="SimpleProduct-container_p">Special Price From</p>
                    </div>
                    <div className="SimpleProduct-container_right">
                        <input classname="AdvancePrice-date" type="date" value="" ></input>
                        <p>To</p>
                        <input classname="AdvancePrice-date" type="date" value=""></input>
                    </div>

                </div>
                <div className="SimpleProduct-container_S1">
                    <div className="SimpleProduct-container_left">
                        <p className="SimpleProduct-container_p">Cost</p>
                        <small className="SimpleProduct-container_small">[global]</small>
                    </div>

                    <div className="placeHolder-moneySim SimpleProduct-container_right" data-placeholder="$">
                        <input type="text" className="fix-placeholder"></input>
                    </div>
                </div>

                <div className="SimpleProduct-container_S2">
                    <div className="SimpleProduct-container_left">
                        <p className="SimpleProduct-container_p">Tier Price</p>
                    </div>

                    <div >
                        <table>
                            <th className="AdvancePrice-th">Website</th>
                            <th className="AdvancePrice-th">Customer Group</th>
                            <th className="AdvancePrice-th">Quantity</th>
                            <th className="AdvancePrice-th">Price</th>
                            <tr>
                            </tr>
                            
                        </table>
                        {
                            this.state.addInputField.map(() => {
                                return (
                                    <div >
                                    <table className="advancePrice-table">
                                        <tr>
                                        <td className="advancePrice-table_td"> 
                                            <p>Website</p>
                                            <select className="table-select">
                                                <option selected>
                                                    All Websites [USD]
                                                </option>
                                            </select>
                                        </td>
         
                                        
                                        <td className="advancePrice-table_td">
                                            <p>Customer Group</p>
                                            <select className="table-select">
                                                <option selected>
                                                    ALL GROUPS
                                                </option>
                                            </select>
                                        </td>
                                        
                                        <td className="advancePrice-table_td">
                                            <p>Quantity</p>
                                            <input className="table-input"></input>
                                        </td>
                                        <td className="advancePrice-table_td">
                                            <p>Price</p>
                                            <div className="placeHolder-moneySim" data-placeholder="$">
                                                <input type="text" className="fix-placeholder table-input" ></input>
                                            </div>
                                        </td>
                                        </tr>
                                        </table>
                                    </div>
                                )
                            })
                        }
                        <button onClick={(e) => this.addNewRow(e)}>Add</button>
                        {/* press Add button create a new input */}
                    </div>
                </div>
                <div className="SimpleProduct-container_S1">
                    <div className="SimpleProduct-container_left">
                        <p className="SimpleProduct-container_p">Manufacturer's Suggested Retail Price</p>
                        <small className="SimpleProduct-container_small">[global]</small>
                    </div>

                    <div className="placeHolder-moneySim SimpleProduct-container_right" data-placeholder="$">
                        <input type="text" className="fix-placeholder"></input>
                    </div>
                </div>
                <div className="SimpleProduct-container_S1">
                    <div className="SimpleProduct-container_left">
                        <p className="SimpleProduct-container_p">Display Actual Price</p>
                        <small className="SimpleProduct-container_small">[website]</small>
                    </div>
                    <div className="SimpleProduct-container_right">
                        <select>
                            <option selected>
                                Use config
                            </option>
                        </select>
                    </div>

                </div>

            </div>
        )
    }
}

export default AdvancePrice
