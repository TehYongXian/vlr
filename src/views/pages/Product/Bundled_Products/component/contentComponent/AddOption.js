import React, { useState } from 'react'
import {

} from '@coreui/react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader as header,
    CCollapse,
    CPagination
} from '@coreui/react';
import AddOptionTable from './AddOptionTable';




const AddOption = () => {

    const [collapse, setCollapse] = useState(false)
    const [collapseMulti, setCollapseMulti] = useState([false, false])
    const [accordion, setAccordion] = useState(1)

    const toggle = (e) => {
        setCollapse(!collapse)
        e.preventDefault()
    }

    const [currentPage, setCurrentPage] = useState(1)



    return (
        <div className="BP">


            <div>
                <CPagination
                className="BP-Pagination"
                    align="end"
                    size="sm"
                    activePage={currentPage}
                    pages={10}
                    onActivePageChange={setCurrentPage}
                />
            </div>
            <div>
                {/* <button onClick={this.handleAddRow}>Add Option</button> */}
            </div>
            <CCard>
                <CCardBody>
                    <div id="accordion">
                        <div id="headingOne">
                            <header>
                                <CButton
                                    // block 
                                    className="text-left m-0 p-0"
                                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                                >
                                    <h5 className="m-0 p-0">Table</h5>
                                </CButton>

                                <button ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="c-icon c-icon-2xl" role="img"><path fill="var(--ci-primary-color, currentColor)" d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z" class="ci-primary"></path><rect width="32" height="200" x="168" y="216" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="32" height="200" x="240" y="216" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="32" height="200" x="312" y="216" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z" class="ci-primary"></path></svg></button>

                            </header>
                            <hr />
                            <CCollapse show={accordion === 0}>
                                <CCardBody>
                                    <div className="BP-container">
                                        <div>
                                            <p className="BP-container_p">Option Title</p>
                                            <input className="BP-container_input"></input>
                                        </div>
                                        <div>
                                            <p className="BP-container_p">Input Type</p>
                                            <select>
                                                <option selected>
                                                    Drop-down
                                                </option>
                                                <option>
                                                    Radio Buttons
                                                </option>
                                                <option>
                                                    Checkbox
                                                </option>
                                                <option>
                                                    Multiple Select
                                                </option>
                                            </select>
                                        </div>
                                        <div>
                                            <input type="checkbox"></input>
                                            <label>Required</label>
                                        </div>
                                    </div>

                                    <div>
                                        <AddOptionTable />
                                    </div>
                                </CCardBody>
                            </CCollapse>
                        </div>
                    </div>
                </CCardBody>
            </CCard>
            
        </div>


        // </div>
    )
}

export default AddOption