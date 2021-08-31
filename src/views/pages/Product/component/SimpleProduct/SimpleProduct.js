import { cilToggleOn } from '@coreui/icons'
import React from 'react'
import {
    CCardBody,
    CSwitch
} from '@coreui/react'
import { Link } from 'react-router-dom'
import CategoriesMultiSelect from './component/component/CategoriesMultiSelect'
import ContryList from './component/component/ContryList'
import Content from './component/Content'
import Header2 from '../header/Header2'

import categoryOptions from './component/component/CategoriesData'
import ReactSelect from 'react-select'

import AdvancePrice from './component/AdvancePrice'
import AdvancedInventory from './component/AdvancedInventory'




class SimpleProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'show',
            selectedCategoryOptions: [],
            selectedCountryOptions: [],
            data: null,
            AdvanceShow: false,
            AdvanceShow2: false,
        };

        this.handleCategoryOptionsChange = this.handleCategoryOptionsChange.bind(this)
        this.handleCountryOptionsChange = this.handleCountryOptionsChange.bind(this)
    }

    divstatus = (e) => {
        this.setState({ value: e.target.value });
    }

    handleCategoryOptionsChange(selectedOptions) {
        this.setState({ selectedCategoryOptions: selectedOptions });
    }
    handleCountryOptionsChange(selectedOptions2) {
        this.setState({ selectedCountryOptions: selectedOptions2 });
    }





    render() {
        const HandleChange = e => {
            this.setState({ AdvanceShow: !this.state.AdvanceShow });
        }
        const HandleChange2 = e => {
            this.setState({ AdvanceShow2: !this.state.AdvanceShow2 });
        }

        return (
            <div>
                <div>
                    <Header2
                        selectedCategoryOptions={this.state.selectedCategoryOptions}
                    />
                </div>

                {/* <input type="submit" value="Submit" /> */}

                <div className="SimpleProduct-container">
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Enable Product</p>
                            <small className="SimpleProduct-container_small">[website]</small>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <CSwitch id="Enable_product" className={'mx-1'} variant={'3d'} color={'success'} onChange={(e) => console.log(e.target.checked)} />
                        </div>
                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Attribute Set</p>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <select id="attribute_set" className="SimpleProduct-container_select">
                                <option selected>
                                    Default
                                </option>
                            </select>
                        </div>

                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Product Name</p>
                            <small className="SimpleProduct-container_small">[store view]</small>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <input id="name" className="SimpleProduct-container_input"></input>
                            {/* <button onclick={SaveDataAction}>Click to Save</button> */}

                        </div>

                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">SKU</p>
                            <small className="SimpleProduct-container_small">[global]</small>
                        </div>

                        <div className="SimpleProduct-container_right">
                            <input id="sku" className="SimpleProduct-container_input"></input>
                        </div>
                    </div>
                    <div>
                        <div className="SimpleProduct-container_S1">
                            <div className="SimpleProduct-container_left">
                                <p className="SimpleProduct-container_p">Price</p>
                                <small className="SimpleProduct-container_small">[global]</small>
                            </div>

                            <div className="placeHolder-moneySim SimpleProduct-container_right-noflex" data-placeholder="$">
                                <input id="price" type="number" min="1" className="fix-placeholder SimpleProduct-container_input"></input>
                                <button onClick={HandleChange} className="showHide-btn">{this.state.AdvanceShow ? 'Hide ' : 'Show '}Advanced Pricing</button>
                            </div>

                        </div>
                        {
                            this.state.AdvanceShow ? <div><AdvancePrice /><h1>test</h1></div> : null
                        }


                    </div>

                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Tax Class</p>
                            <small className="SimpleProduct-container_small">[website]</small>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <select id="tax_class" className="SimpleProduct-container_select">
                                <option>
                                    None
                                </option>
                                <option selected>
                                    Taxable Goods
                                </option>
                            </select>
                        </div>

                    </div>
                    <div>
                        <div className="SimpleProduct-container_S1">
                            <div className="SimpleProduct-container_left">
                                <p className="SimpleProduct-container_p">Quantity</p>
                                <small className="SimpleProduct-container_small">[global]</small>
                            </div>

                            <div className="SimpleProduct-container_right-noflex">
                                <input id="quantity" className="SimpleProduct-container_input" placeholder></input>
                                <button onClick={HandleChange2} className="showHide-btn">{this.state.AdvanceShow2 ? 'Hide ' : 'Show '}Advanced Inventory</button>

                            </div>
                        </div>
                        {
                            this.state.AdvanceShow2 ? <div><AdvancedInventory /></div> : null
                        }

                    </div>

                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Stock Status</p>
                            <small className="SimpleProduct-container_small">[global]</small>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <select id="stock_status" className="SimpleProduct-container_select">
                                <option selected>
                                    In Stock
                                </option>
                                <option>
                                    Out of Stock
                                </option>
                            </select>
                        </div>

                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Weight</p>
                            <small className="SimpleProduct-container_small">[global]</small>
                        </div>


                        <div className="placeHolder-weight SimpleProduct-container_right-noflex" data-placeholder="lbs">
                            <input id="weight" min="0" className="fix-placeholder-weight SimpleProduct-container_input"></input>
                            <select className="SimpleProduct-container_select2" onChange={this.divstatus}>
                                <option selected>
                                    This item has weight
                                </option>
                                <option>
                                    This item has no weight
                                </option>
                            </select>
                        </div>

                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Categories</p>
                            <small className="SimpleProduct-container_small">[global]</small>
                        </div>


                        {/* add checkbox selection */}

                        <div className="SimpleProduct-container_right">

                            <ReactSelect
                                className="ReactSelect"
                                isMulti
                                options={categoryOptions}
                                value={this.state.selectedCategoryOptions}
                                onChange={this.handleCategoryOptionsChange}
                            />

                            <Link to="/NewCategory"><button className="SimpleProduct-container_button">New Category</button></Link>
                        </div>

                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Visibility</p>
                            <small className="SimpleProduct-container_small">[store view]</small>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <select id="visibility" className="SimpleProduct-container_select">
                                <option selected>
                                    Catalog, Search
                                </option>
                                <option>

                                </option>
                            </select>
                        </div>


                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Set product of new from</p>
                            <small className="SimpleProduct-container_small">[website]</small>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <input id="new_from" className="SimpleProduct-container_date" type="date"></input>
                            <p>To</p>
                            <input id="new_to" className="SimpleProduct-container_date" type="date"></input>
                        </div>
                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Country of Manufacture</p>
                            <small className="SimpleProduct-container_small">[website]</small>
                        </div >
                        <div className="SimpleProduct-container_right">

                            <ContryList
                            // options={categoryOptions}
                            // value={this.state.selectedCountryOptions}
                            // onChange={this.handleCountryOptionsChange}
                            />
                        </div>
                    </div>

                </div>
                <div>
                    <Content />

                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default SimpleProduct
// export { divstatus };
