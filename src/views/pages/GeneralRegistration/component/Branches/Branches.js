import { Pagination } from '@material-ui/lab'
import React from 'react'
import NavTab from "../NavTab/NavTab";

const Branches = () => {
    return (
        <>
            <h2>Branches</h2>
            <div className="Branches-container">
                <h3 className="Branches-container_title">Add Branches</h3>

                <div className="Branches-container_section1">
                    <h4>Create branches for your institution</h4>
                    <div className="Branches-container_section1-1">
                        <div className="Branches-container_section1-inputAddress">
                            <p>Address</p>
                            <input className="Branches-container_section1-input"></input>
                        </div>
                        <div className="Branches-container_section1-inputCity">
                            <p>City</p>
                            <input className="Branches-container_section1-input"></input>
                        </div>
                        <button className="Branches-container_section1-btnSave">SAVE</button>

                    </div>
                </div>
                <div>
                    <h2 className="Branches-container_title">Added Branches</h2>
                    <div className="Branches-container_section2">
                        <div className="Branches-container_section2title">
                            <p className="Branches-container_section2title-p1">Branches</p>
                            <p className="Branches-container_section2title-p2">Actions</p>
                        </div>
                        <div className="Branches-container_section3">
                            <div className="Branches-container_section3-text">
                                <div className="Branches-container_section3-p">
                                    <p>Message</p>
                                </div>
                                <div className="Branches-container_section3-p">
                                    <p>Address</p>
                                </div>
                            </div>
                            <div className="Branches-container_section3-btnSection">
                                <button className="Branches-container_btn">Remove</button>
                            </div>
                        </div>
                        <div className="Branches-container_pagination">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Branches
