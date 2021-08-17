import React, { useState } from "react";
import { Link } from 'react-router-dom'

function AdvancedInventory() {
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);

    const checkboxHandler = () => {
        setSelection(!isSelected);
    }
    const checkboxHandler2 = () => {
        setSelection2(!isSelected2);
    }
    const checkboxHandler3 = () => {
        setSelection3(!isSelected3);
    }
    const checkboxHandler4 = () => {
        setSelection4(!isSelected4);
    }

    return (
        <div className="SimpleProduct-container">
            <div className="Done-btn-div">
                <Link to="/SimpleProduct"><button className="Done-btn" >Done</button></Link>
            </div>
            <hr />
            <div className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left">
                    <p className="SimpleProduct-container_p">Manage Stock</p>
                    <small className="SimpleProduct-container_small">[global]</small>
                </div>
                <div className="SimpleProduct-container_right">
                    <select className="SimpleProduct-container_select" disabled={isSelected} setSelection>
                        <option selected>
                            Yes
                        </option>
                        <option>
                            No
                        </option>
                    </select>

                    <input type="checkbox" onChange={checkboxHandler} defaultChecked></input>
                    <p>Use Config Settings</p>

                </div>
            </div>

            <div className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left">
                    <p className="SimpleProduct-container_p">Qty</p>
                    <small className="SimpleProduct-container_small">[global]</small>
                </div>

                <div className="SimpleProduct-container_right">
                    <input className="SimpleProduct-container_input"></input>
                </div>
            </div>

            <div className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left">
                    <p className="SimpleProduct-container_p">Out-of-Stock Threshold</p>
                    <small className="SimpleProduct-container_small">[global]</small>
                </div><div className="SimpleProduct-container_right">
                    <input className="SimpleProduct-container_input" disabled={!isSelected2}></input>

                    <input type="checkbox" onChange={checkboxHandler2} defaultChecked></input>
                    <p>Use Config Settings</p>
                </div>
            </div>
            <div className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left">
                    <p className="SimpleProduct-container_p">Minimum Qty Allowed in Shopping Cart</p>
                    <small className="SimpleProduct-container_small">[global]</small>
                </div><div className="SimpleProduct-container_right">
                    <input className="SimpleProduct-container_input" placeholder="1" value="1" disabled={!isSelected3}></input>

                    <input type="checkbox" onChange={checkboxHandler3} defaultChecked></input>
                    <p>Use Config Settings</p>
                </div>
            </div>
            <div className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left">
                    <p className="SimpleProduct-container_p">Maximum Qty Allowed in Shopping Cart</p>
                    <small className="SimpleProduct-container_small">[global]</small>
                </div>
                <div className="SimpleProduct-container_right">
                    <input className="SimpleProduct-container_input" placeholder="10000" value="10000" disabled={!isSelected4}></input>

                    <input type="checkbox" onChange={checkboxHandler4} defaultChecked></input>
                    <p>Use Config Settings</p>
                </div>
            </div>
            <div className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left">
                    <p className="SimpleProduct-container_p">Qty Uses Decimals</p>
                    <small className="SimpleProduct-container_small">[global]</small>
                </div>
                <div className="SimpleProduct-container_right">
                    <select className="SimpleProduct-container_select">
                        <option selected>
                            No
                        </option>
                        <option>
                            Yes
                        </option>
                    </select>
                </div>
            </div>


        </div>
    )
}

export default AdvancedInventory
