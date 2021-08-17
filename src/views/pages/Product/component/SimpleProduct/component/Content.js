import React, { useState } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader as header,
    CCollapse,
    CSwitch
} from '@coreui/react';
import { bold } from 'chalk';
import ContentItem from './component/ContentItem.js/ContentItem';
import Dropzone from "./component/DropZone";
import SearchEngineOptimization from "./component/SearchEngineOptimization"
import RelatPro from "./RelatPro"

import { Link } from '@material-ui/core';
import AddItem from './component/addItem/AddItem';


const Content = () => {

    const [collapse, setCollapse] = useState(false)
    const [collapseMulti, setCollapseMulti] = useState([false, false])
    const [accordion, setAccordion] = useState(1)


    const [isSelected, setSelection] = useState(true);
    const checkboxHandler = () => {
        setSelection(!isSelected);
    }


    const [isHide, setHide] = useState(false);
    const hideDownloadable = () => {
        setHide(!isHide);
    }


    const toggle = (e) => {
        setCollapse(!collapse)
        e.preventDefault()
    }

    const toggleMulti = (type) => {
        let newCollapse = collapseMulti.slice()
        switch (type) {
            case "left":
                newCollapse[0] = !collapseMulti[0];
                break;
            case "right":
                newCollapse[1] = !collapseMulti[1];
                break;
            case "both":
                newCollapse[0] = !collapseMulti[0];
                newCollapse[1] = !collapseMulti[1];
                break;
            default:
        }
        setCollapseMulti(newCollapse)
    }


    return (
        // <CCol xl="6">
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
                                <h5 className="m-0 p-0">Content</h5>
                            </CButton>
                        </header>
                        <CCollapse show={accordion === 0}>
                            <CCardBody>
                                <div className="SimpleProduct-container">
                                    <div className="SimpleProduct-container_S3">
                                        <div className="SimpleProduct-container_left">
                                            <p className="SimpleProduct-container_p">Description</p>
                                            <small className="SimpleProduct-container_small">store view</small>
                                        </div>
                                        <div className="SimpleProduct-container_right-content">
                                            <button className="SimpleProduct-container_button1">Show / Hide Editor</button>
                                            <ContentItem />
                                        </div>
                                    </div>
                                    <div className="SimpleProduct-container_S3">
                                        <div className="SimpleProduct-container_left">
                                            <p className="SimpleProduct-container_p">Short Description</p>
                                            <small className="SimpleProduct-container_small">store view</small>
                                        </div>
                                        <div>
                                            <button className="SimpleProduct-container_button1">Show / Hide Editor</button>
                                            <ContentItem />
                                        </div>
                                    </div>
                                </div>
                            </CCardBody>
                        </CCollapse>
                    </div>
                    <hr />
                    <div className="mb-0">
                        <header id="headingTwo">
                            <CButton
                                // block 
                                className="text-left m-0 p-0"
                                onClick={() => setAccordion(accordion === 1 ? null : 1)}
                            >
                                <h5 className="m-0 p-0">Configurations</h5>
                            </CButton>
                        </header>
                        <CCollapse show={accordion === 1}>
                            <CCardBody>
                                <div>
                                    <p>Configurable products allow customers to choose options (Ex: shirt color). You need to create a simple product for each configuration (Ex. a product for each color).</p>
                                </div>
                                <div>
                                    <button className="SimpleProduct-container_button">Create Configurations</button>
                                </div>
                            </CCardBody>
                        </CCollapse>
                    </div>
                    <hr />
                    <div className="mb-0">
                        <header id="headingThree">
                            <CButton
                                block
                                className="text-left m-0 p-0"
                                onClick={() => setAccordion(accordion === 2 ? null : 2)}
                            >
                                <h5 className="m-0 p-0">Attributes</h5>
                            </CButton>
                        </header>
                        <CCollapse show={accordion === 2}>
                            <CCardBody>
                                item
                            </CCardBody>
                        </CCollapse>
                    </div>
                    <hr />
                    <div className="mb-0">
                        <header id="headingFour">
                            <CButton
                                block
                                className="text-left m-0 p-0"
                                onClick={() => setAccordion(accordion === 3 ? null : 3)}
                            >
                                <h5 className="m-0 p-0">Images And Videos</h5>
                            </CButton>
                        </header>
                        <CCollapse show={accordion === 3}>
                            <CCardBody>
                                <div className="SimpleProduct-container_S4">
                                    <div className="SimpleProduct-container_left">
                                        <Dropzone />
                                    </div>
                                    <div className="SimpleProduct-container_right2">
                                        <Link to="/AddVideo"><button className="SimpleProduct-container_button">Add Video</button></Link>
                                    </div>
                                </div>
                            </CCardBody>
                        </CCollapse>
                    </div>
                    <hr />
                    <div className="mb-0">
                        <header id="headingThree">
                            <CButton
                                block
                                className="text-left m-0 p-0"
                                onClick={() => setAccordion(accordion === 4 ? null : 4)}
                            >
                                <h5 className="m-0 p-0">Search Engine Optimization</h5>
                            </CButton>
                        </header>
                        <CCollapse show={accordion === 4}>
                            <CCardBody>
                                <SearchEngineOptimization />
                            </CCardBody>
                        </CCollapse>
                    </div>
                    <hr />
                    <div className="mb-0">
                        <header id="headingThree">
                            <CButton
                                block
                                className="text-left m-0 p-0"
                                onClick={() => setAccordion(accordion === 5 ? null : 5)}
                            >
                                <h5 className="m-0 p-0">Related Products, Up-Sells, and Cross-Sells</h5>
                            </CButton>
                        </header>
                        <CCollapse show={accordion === 5}>
                            <CCardBody>
                                <RelatPro />
                            </CCardBody>
                        </CCollapse>
                    </div>
                    <hr />
                    <div className="mb-0">
                        <header id="headingThree">
                            <CButton
                                block
                                className="text-left m-0 p-0"
                                onClick={() => setAccordion(accordion === 6 ? null : 6)}
                            >
                                <h5 className="m-0 p-0">Customizable Options</h5>
                            </CButton>
                        </header>
                        <CCollapse show={accordion === 6}>
                            <CCardBody>
                                item
                            </CCardBody>
                        </CCollapse>
                    </div>
                    <hr />
                    <div className="mb-0">
                        <header id="headingThree">
                            <CButton
                                block
                                className="text-left m-0 p-0"
                                onClick={() => setAccordion(accordion === 7 ? null : 7)}
                            >
                                <h5 className="m-0 p-0">Product in Websites</h5>
                            </CButton>
                        </header>
                        <CCollapse show={accordion === 7}>
                            <CCardBody>
                                <div className="website-container">
                                    <p>Website</p>
                                    <div><input type="checkbox" checked></input><label>Main Website</label></div>
                                </div>

                            </CCardBody>
                        </CCollapse>
                    </div>
                    <hr />
                    <div className="mb-0">
                        <header id="headingThree">
                            <CButton
                                block
                                className="text-left m-0 p-0"
                                onClick={() => setAccordion(accordion === 8 ? null : 8)}
                            >
                                <h5 className="m-0 p-0">Design</h5>
                            </CButton>
                        </header>
                        <CCollapse show={accordion === 8}>
                            <CCardBody>
                                <div className="SimpleProduct-container">
                                    <div className="SimpleProduct-container_S1">
                                        <div className="SimpleProduct-container_left">
                                            <p className="SimpleProduct-container_p">Layout</p>
                                            <small className="SimpleProduct-container_small">store view</small>
                                        </div>
                                        <div className="SimpleProduct-container_right">
                                            <select className="SimpleProduct-container_select">
                                                <option selected>
                                                    No layout updates
                                                </option>
                                                <option >
                                                    1 columns
                                                </option>
                                                <option >
                                                    2 columns left bar
                                                </option>
                                                <option >
                                                    2 columns right bar
                                                </option>
                                                <option >
                                                    3 columns
                                                </option>
                                                <option >
                                                    Empty
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="SimpleProduct-container_S1">
                                        <div className="SimpleProduct-container_left">
                                            <p className="SimpleProduct-container_p">Display Product Options In</p>
                                            <small className="SimpleProduct-container_small">store view</small>
                                        </div>
                                        <div className="SimpleProduct-container_right">
                                            <select className="SimpleProduct-container_select">
                                                <option selected>
                                                    Block after info Column
                                                </option>
                                                <option>
                                                    Block after info Column
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="SimpleProduct-container_S1">
                                        <div className="SimpleProduct-container_left">
                                            <p className="SimpleProduct-container_p">Layout Update XML</p>
                                            <small className="SimpleProduct-container_right">store view</small>
                                        </div>
                                        <div className="SimpleProduct-container_right">
                                            <textarea className="SimpleProduct-container_textArea"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </CCardBody>
                        </CCollapse>
                    </div>
                    <hr />
                    <div className="mb-0">
                        <header id="headingThree">
                            <CButton
                                block
                                className="text-left m-0 p-0"
                                onClick={() => setAccordion(accordion === 9 ? null : 9)}
                            >
                                <h5 className="m-0 p-0">Schedule Design Update</h5>
                            </CButton>
                        </header>
                        <CCollapse show={accordion === 9}>
                            <CCardBody>
                                <div className="SimpleProduct-container">
                                    <div className="SimpleProduct-container_S1">
                                        <div className="SimpleProduct-container_left">
                                            <p className="SimpleProduct-container_p">Schedule Update From</p>
                                            <small className="SimpleProduct-container_small">[store view]</small>
                                        </div>
                                        <div className="SimpleProduct-container_right">
                                            <input type="date"></input>
                                            <p>To</p>
                                            <input type="date"></input>
                                        </div>
                                    </div>
                                    <div className="SimpleProduct-container_S1">
                                        <div className="SimpleProduct-container_left">
                                            <p className="SimpleProduct-container_p">New Theme</p>
                                            <small className="SimpleProduct-container_small">[store view]</small>
                                        </div>
                                        <div className="SimpleProduct-container_right">
                                            <select className="SimpleProduct-container_select">
                                                <option selected>
                                                    -- Please Select --
                                                </option>
                                                <option>
                                                    Magento Blank
                                                </option>
                                                <option>
                                                    Magento Luma
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="SimpleProduct-container_S1">
                                        <div className="SimpleProduct-container_left">
                                            <p className="SimpleProduct-container_p">New Layout</p>
                                            <small className="SimpleProduct-container_small">[store view]</small>
                                        </div>
                                        <div className="SimpleProduct-container_right">
                                            <select className="SimpleProduct-container_select">
                                                <option selected>
                                                    No layout updates
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </CCardBody>
                        </CCollapse>
                    </div>
                    <hr />
                    <div className="mb-0">
                        <header id="headingThree">
                            <CButton
                                block
                                className="text-left m-0 p-0"
                                onClick={() => setAccordion(accordion === 10 ? null : 10)}
                            >
                                <h5 className="m-0 p-0">Gift Options</h5>
                            </CButton>
                        </header>
                        <CCollapse show={accordion === 10}>
                            <CCardBody>
                                <div className="SimpleProduct-container">
                                    <div className="SimpleProduct-container_S1">
                                        <div className="SimpleProduct-container_left">
                                            <p className="SimpleProduct-container_p">Allow Gift Message</p>
                                            <small className="SimpleProduct-container_small">[global]</small>
                                        </div>
                                        <div className="SimpleProduct-container_right">
                                            <CSwitch className={'mx-1'} shape={'pill'} color={'success'} labelOn={'\u2713'} labelOff={'\u2715'} />
                                            <input type="checkbox" onChange={checkboxHandler} defaultChecked></input>
                                            <label>Use Config Settings</label>
                                        </div>
                                    </div>

                                </div>
                            </CCardBody>
                        </CCollapse>
                    </div>
                    <hr />
                    <div className="mb-0">
                        <header id="headingThree">
                            <CButton
                                block
                                className="text-left m-0 p-0"
                                onClick={() => setAccordion(accordion === 11 ? null : 11)}
                            >
                                <h5 className="m-0 p-0">Downloadable Information</h5>
                            </CButton>
                        </header>
                        <CCollapse show={accordion === 11}>
                            <CCardBody>
                                <div className="SimpleProduct-container">
                                    <div className="SimpleProduct-container_S1">
                                        <input type="checkbox"></input>
                                        <label>Is this Downloadable Product?</label>
                                    </div>
                                    <div
                                    // className={this.state.value}
                        
                                    >
                                        <h5>Links</h5>
                                        {/* <div > */}
                                        <div className="SimpleProduct-container_S1">
                                            <div className="SimpleProduct-container_left">
                                                <p className="SimpleProduct-container_p">Title</p>
                                                <small className="SimpleProduct-container_small">store view</small>
                                            </div>
                                            <div className="SimpleProduct-container_right">
                                                <input className="SimpleProduct-container_input" placeholder="Links"></input>
                                            </div>
                                        </div>
                                        <div className="SimpleProduct-container_S1">
                                            <div className="SimpleProduct-container_left">
                                                <small className="SimpleProduct-container_small">[global]</small>
                                            </div>
                                            <div className="SimpleProduct-container_right">
                                                <input type="checkbox"></input>
                                                <label>Links can be purchased separately</label>
                                            </div>
                                            </div>

                                            <div className="Downloadable-table">
                                                {/* <table>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Price</th>
                                                        <th>File</th>
                                                        <th>Sample</th>
                                                        <th>Shareable</th>
                                                        <th>Max. Downloads</th>
                                                    </tr>
                                                </table> */}
                                                <AddItem />
                                            </div>
                                            <div>
                                                <div className="downloadable-text"> 
                                                    Alphanumeric, dash and underscore charaters are recommended for filenames. Improper character are replaced with '_'.
                                                </div>

                                                <h5>Samples</h5>

                                                    <div className="SimpleProduct-container_S1">
                                                        <div className="SimpleProduct-container_left">
                                                            <p className="SimpleProduct-container_p">Title</p>
                                                            <small className="SimpleProduct-container_small">store view</small>
                                                        </div>
                                                        <div className="SimpleProduct-container_right">
                                                            <input className="SimpleProduct-container_input" placeholder="Samples"></input>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        {/* </div> */}

                                </div>
                            </CCardBody>
                        </CCollapse>
                    </div>
                </div>
                <hr />
            </CCardBody>
        </CCard>
    )
}

export default Content
