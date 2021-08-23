import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddItem from './component/addItem/AddItem'

class AdvancePrice extends Component {
    state = {
        addInputField: []
    }

    onTrigger = (event) => {
        this.props.parentCallback("Data from child");
        event.preventDefault();
    }

    addNewRow() {
        this.setState({ addInputField: [...this.state.addInputField, ""] })
    }
    render() {
        return (
            <div className="AdvancePrice-container">
                {/* <div className="Done-btn-div">
                    <Link to="/SimpleProduct"><button value = "Submit" className="Done-btn" >Done</button></Link>
                </div>
                <hr /> */}
                <div className="SimpleProduct-container_S1">
                    <div className="SimpleProduct-container_left">
                        <p className="SimpleProduct-container_p">Speacial Price</p>
                        <small className="SimpleProduct-container_small">[global]</small>
                    </div>

                    <div className="placeHolder-moneySim SimpleProduct-container_right" data-placeholder="$">
                        <input id="AP_Speacial_Price" type="number" className="fix-placeholder"></input>
                    </div>
                </div>
                <div className="SimpleProduct-container_S1">
                    {/* need remove the placeholder */}
                    <div className="SimpleProduct-container_left">
                        <p className="SimpleProduct-container_p">Special Price From</p>
                    </div>
                    <div className="SimpleProduct-container_right">
                        <input id="AP_Speacial_From" classname="AdvancePrice-date" type="date" value="" ></input>
                        <p>To</p>
                        <input id="AP_Speacial_To" classname="AdvancePrice-date" type="date" value=""></input>
                    </div>

                </div>
                <div className="SimpleProduct-container_S1">
                    <div className="SimpleProduct-container_left">
                        <p className="SimpleProduct-container_p">Cost</p>
                        <small className="SimpleProduct-container_small">[global]</small>
                    </div>

                    <div className="placeHolder-moneySim SimpleProduct-container_right" data-placeholder="$">
                        <input id="AP_Cost" type="number" className="fix-placeholder"></input>
                    </div>
                </div>

                <div className="SimpleProduct-container_S2">
                    <div className="SimpleProduct-container_left">
                        <p className="SimpleProduct-container_p">Tier Price</p>
                    </div>

                    <div >
                        <AddItem/>
                    </div>
                </div>
                <div className="SimpleProduct-container_S1">
                    <div className="SimpleProduct-container_left">
                        <p className="SimpleProduct-container_p">Manufacturer's Suggested Retail Price</p>
                        <small className="SimpleProduct-container_small">[global]</small>
                    </div>

                    <div className="placeHolder-moneySim SimpleProduct-container_right" data-placeholder="$">
                        <input id="AP_MSRP" type="number" className="fix-placeholder"></input>
                    </div>
                </div>
                <div className="SimpleProduct-container_S1">
                    <div className="SimpleProduct-container_left">
                        <p className="SimpleProduct-container_p">Display Actual Price</p>
                        <small className="SimpleProduct-container_small">[website]</small>
                    </div>
                    <div className="SimpleProduct-container_right">
                        <select id="AP_DAP">
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
