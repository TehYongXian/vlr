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

class SimpleProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'show' };
    }
    componentDidMount() {

    }
    divstatus = (e) => {
        this.setState({ value: e.target.value });
    }



    render() {
        return (
            <div>
                <div>
                    <Header2 />
                </div>

                <div className="SimpleProduct-container">
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Enable Product</p>
                            <small className="SimpleProduct-container_small">[website]</small>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <CSwitch className={'mx-1'} variant={'3d'} color={'success'} onChange={(e) => console.log(e.target.checked)} />
                        </div>
                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Attribute Set</p>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <select className="SimpleProduct-container_select">
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
                            <input className="SimpleProduct-container_input"></input>
                        </div>

                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">SKU</p>
                            <small className="SimpleProduct-container_small">[global]</small>
                        </div>

                        <div className="SimpleProduct-container_right">
                            <input className="SimpleProduct-container_input"></input>
                        </div>
                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Price</p>
                            <small className="SimpleProduct-container_small">[global]</small>
                        </div>

                        <div className="placeHolder-moneySim SimpleProduct-container_right-noflex" data-placeholder="$">
                            <input type="text" className="fix-placeholder SimpleProduct-container_input"></input>
                            <Link to="/AdvancePrice"><a className="SimpleProduct-container_a">Advanced Pricing</a></Link>
                        </div>
                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Tax Class</p>
                            <small className="SimpleProduct-container_small">[website]</small>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <select className="SimpleProduct-container_select">
                                <option>
                                    None
                                </option>
                                <option selected>
                                    Taxable Goods
                                </option>
                            </select>
                        </div>

                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Quantity</p>
                            <small className="SimpleProduct-container_small">[global]</small>
                        </div>

                        <div className="SimpleProduct-container_right-noflex">
                            <input className="SimpleProduct-container_input" placeholder></input>
                            <Link to="/AdvancedInventory"><a  className="SimpleProduct-container_a">Advanced inventory</a></Link>
                        </div>
                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Stock Status</p>
                            <small className="SimpleProduct-container_small">[global]</small>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <select className="SimpleProduct-container_select">
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


                        <div className="placeHolder-weight SimpleProduct-container_right" data-placeholder="lbs">
                            <input type="text" className="fix-placeholder-weight SimpleProduct-container_input"></input>
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
                        {/* <select>
                        <option selected>
                            select...
                        </option>
                        <option>
                            <input type="checkbox" label="Default Category"></input>
                        </option>
                    </select> */}
                        <div className="SimpleProduct-container_right">
                        <CategoriesMultiSelect className="SimpleProduct-container_select"/>

                        <Link to="/NewCategory"><button className="SimpleProduct-container_button">New Category</button></Link>
                        </div>
                        
                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Visibility</p>
                            <small className="SimpleProduct-container_small">[store view]</small>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <select className="SimpleProduct-container_select">
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
                            <p className="SimpleProduct-container_p">Visibility</p>
                            <small className="SimpleProduct-container_small">[website]</small>
                        </div>
                        <div className="SimpleProduct-container_right">
                            <input className="SimpleProduct-container_date" type="date"></input>
                            <p>To</p>
                            <input  className="SimpleProduct-container_date" type="date"></input>
                        </div>
                    </div>
                    <div className="SimpleProduct-container_S1">
                        <div className="SimpleProduct-container_left">
                            <p className="SimpleProduct-container_p">Country of Manufacture</p>
                            <small className="SimpleProduct-container_small">[website]</small>
                        </div >
                        <div className="SimpleProduct-container_right">
                            <ContryList />
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
