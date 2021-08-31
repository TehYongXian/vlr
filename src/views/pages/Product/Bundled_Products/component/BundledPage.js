import React, { Component } from 'react'
import {
    CCardBody,
    CSwitch
} from '@coreui/react'
import ContryList from '../../component/SimpleProduct/component/component/ContryList';


export default class BundledPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AdvanceShow: false,
            AdvanceShow2: false,
        };

    }
    render() {
        const HandleChange = e => {
            this.setState({ AdvanceShow: !this.state.AdvanceShow });
        }
        const HandleChange2 = e => {
            this.setState({ AdvanceShow2: !this.state.AdvanceShow2 });
        }
        return (
            <div className="BundledPage">
            <div className="BundledPage_container">
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Enable Product</p>
                        <small className="BundledPage_item-small">[website]</small>
                    </div>
                    <div className="BundledPage_item-right">
                        <CSwitch id="" className={'mx-1'} variant={'3d'} color={'success'} onChange={(e) => console.log(e.target.checked)} />
                    </div>
                </div>

                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Attribute Set</p>
                    </div>
                    <div className="BundledPage_item-right">
                        <select>
                            <option disabled selected hidden>
                                Default
                            </option>
                            <option >
                                
                            </option>
                        </select>
                    </div>
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Product Name</p>
                        <small className="BundledPage_item-small">[store view]</small>
                    </div>
                    <div className="BundledPage_item-right">
                        <input type="text" className="BundledPage_item-input" />
                    </div>
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">SKU</p>
                        <small className="BundledPage_item-small">[global]</small>
                    </div>
                    <div className="BundledPage_item-right">
                        <input type="text" className="BundledPage_item-input" />
                    </div>
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Dynamic SKU</p>
                        <small className="BundledPage_item-small">[global]</small>
                    </div>
                    <div className="BundledPage_item-right">
                        <CSwitch id="" className={'mx-1'} variant={'3d'} color={'success'} onChange={(e) => console.log(e.target.checked)} checked/>
                    </div>
                </div>
                <div className="BundledPage_item">
                    {/* <div> */}
                        <div className="BundledPage_item-left">
                            <p className="BundledPage_item-p">Price</p>
                            <small className="BundledPage_item-small">[global]</small>
                        </div>
                        <div className="placeHolder-moneySim BundledPage_item-right2" data-placeholder="$">
                            <input id="price" type="number" min="1" className="fix-placeholder BundledPage_item-input"></input>
                            <button onClick={HandleChange} className="showHide-btn">{this.state.AdvanceShow ? 'Hide ' : 'Show '}Advanced Pricing</button>
                        </div>
                    {/* </div> */}
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Dynamic Price</p>
                        <small className="BundledPage_item-small">[global]</small>
                    </div>
                    <div className="BundledPage_item-right">
                        <CSwitch id="" className={'mx-1'} variant={'3d'} color={'success'} onChange={(e) => console.log(e.target.checked)} checked/>
                    </div>
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Tax Class</p>
                        <small className="BundledPage_item-small">[website]</small>
                    </div>
                    <div className="BundledPage_item-right">
                        <select name="" id="" className="BundledPage_item-select">
                            <option selected>
                                Taxable Goods
                            </option>
                        </select>
                    </div>
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Quantity</p>
                        <small className="BundledPage_item-small">[global]</small>
                    </div>
                    <div className="BundledPage_item-right4">
                        <input type="text" className="BundledPage_item-input" />
                        <button onClick={HandleChange2} className="showHide-btn">{this.state.AdvanceShow2 ? 'Hide ' : 'Show '}Advanced Inventory</button>
                    </div>
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Stock Status</p>
                        <small className="BundledPage_item-small">[global]</small>
                    </div>
                    <div className="BundledPage_item-right2">
                        <select name="" id="" className="BundledPage_item-select">
                            <option selected>
                                In Stock
                            </option>
                        </select>
                    </div>
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Weight</p>
                        <small className="BundledPage_item-small">[global]</small>
                    </div>
                    <div className="BundledPage_item-right2">
                        <input id="weight" min="0" className="fix-placeholder-weight BundledPage_item-input"></input>
                    </div>
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Dynamic Weight</p>
                        <small className="BundledPage_item-small">[global]</small>
                    </div>
                    <div className="BundledPage_item-right2">
                        <CSwitch id="" className={'mx-1'} variant={'3d'} color={'success'} onChange={(e) => console.log(e.target.checked)} />
                    </div>
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Categories</p>
                        <small className="BundledPage_item-small">[global]</small>
                    </div>
                    <div className="BundledPage_item-right2">
                        <select name="" id="" className="BundledPage_item-select">
                            <option selected>
                                Select...
                            </option>
                        </select>
                        <button className="BundledPage_item-btn">New Category</button>
                    </div>
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Visibility</p>
                        <small className="BundledPage_item-small">[store view]</small>
                    </div>
                    <div className="BundledPage_item-right2">
                        <select name="" id="" className="BundledPage_item-select">
                            <option selected>
                                Catalog, Search
                            </option>
                        </select>
                    </div>
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Set Product as New From</p>
                        <small className="BundledPage_item-small">[website]</small>
                    </div>
                    <div className="BundledPage_item-right3">
                        <input id="new_from" className="BundledPage_item_date" type="date"></input>
                        <p>To</p>
                        <input id="new_to" className="BundledPage_item_date" type="date"></input>
                    </div>
                </div>
                <div className="BundledPage_item">
                    <div className="BundledPage_item-left">
                        <p className="BundledPage_item-p">Country of Manufacture</p>
                        <small className="BundledPage_item-small">[website]</small>
                    </div>
                    <div className="BundledPage_item-right2">
                        <ContryList/>
                    </div>
                </div>
                


            </div>
            </div>
        )
    }
}
