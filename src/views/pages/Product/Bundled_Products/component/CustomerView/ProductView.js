import React, { Component } from 'react'
import CustomerViewHeader from './CustomerViewHeader'
import { Link } from 'react-router-dom'


export default class ProductView extends Component {
    render() {
        return (
            <div>
                <div>
                    <CustomerViewHeader />
                </div>
                <div className="PV-container">
                    <div>
                        <img width="400px" height="400px"></img>
                    </div>
                    <div>
                        <div>
                            <h2>Item Name</h2>
                            <Link><a>Be the first to review this product</a></Link>
                        </div>
                        <div className="PV-container_section2">
                            <div className="PV-container_section2-1">
                                <div>
                                    <h5>From</h5>
                                    <h4>$0.00</h4>
                                </div>
                                <div>
                                    <h5>To</h5>
                                    <h4>$0.00</h4>
                                </div>
                            </div>
                            <div className="PV-container_section2-2">
                                <p className="PV-container_section2-2-p"><b>IN STOCK</b></p>
                                <small >SKUs: Contemporary During Room Set</small>

                            </div>
                        </div>
                        <hr />
                        <div>
                            <div>
                                <button className="PV-container_btn1">Customize and Add to Cart</button>
                            </div>
                            <div>
                                <button className="PV-container_btn2" height="50px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="c-icon c-icon-2xl" role="img"><path fill="var(--ci-primary-color, currentColor)" d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z" class="ci-primary"></path></svg>ADD TO WISH LIST</button>
                                <button className="PV-container_btn2" height="50px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="c-icon c-icon-2xl" role="img"><path fill="var(--ci-primary-color, currentColor)" d="M136,416h88a24.028,24.028,0,0,0,24-24V184a24.028,24.028,0,0,0-24-24H136a24.028,24.028,0,0,0-24,24V392A24.028,24.028,0,0,0,136,416Zm8-224h72V384H144Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M424,16H336a24.028,24.028,0,0,0-24,24V392a24.028,24.028,0,0,0,24,24h88a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,424,16Zm-8,368H344V48h72Z" class="ci-primary"></path><polygon fill="var(--ci-primary-color, currentColor)" points="48 16 16 16 16 496 496 496 496 464 48 464 48 16" class="ci-primary"></polygon></svg>ADD TO COMPARE</button>

                                <button className="PV-container_btn2" height="50px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="c-icon c-icon-2xl" role="img"><path fill="var(--ci-primary-color, currentColor)" d="M16,112V496H496V112ZM236.8,341.6a32.167,32.167,0,0,0,38.4,0L298.667,324,464,448v16H48V448L213.333,324ZM256,316,48,160V144H464v16ZM48,200,186.667,304,48,408ZM464,408,325.333,304,464,200Z" class="ci-primary"></path></svg>EMAIL</button>
                            </div>
                            <div>
                                <p>Product Description</p>
                                <ul>
                                    <li>Table</li>
                                    <li>Chair</li>
                                    <li>Bench</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className="PV-container2-title">
                        <h2>Item Name</h2>
                        <Link><a>Go back to product details</a></Link>
                    </div>
                    <div className="PV-container2">


                        <div className="PV-container2_content2">

                            <div className="PV-container2_content2-b">
                                <div>


                                    <div>
                                        <div>
                                            <b>Table</b>
                                        </div>
                                        <div>
                                            <select className="PV-container2_content2-select">
                                                <option>
                                                    Lippa 36" Round Wood Top Dining Table in White $price
                                                </option>
                                                <option>
                                                    Lippa 47" Round Wood Top Dining Table in White $price
                                                </option>
                                            </select>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div>
                                <div>
                                    <b>Quantity</b>

                                </div>
                                <div>
                                    <input className="PV-container2_content2-input"></input>

                                </div>
                            </div>
                            <hr />
                            <div>
                                <div>
                                    <b>Chair</b>
                                    <div>

                                        <select className="PV-container2_content2-select">
                                            <option disabled selected hidden>
                                                Choose a selection...
                                            </option>
                                            <option>

                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <b>Quantity</b>
                                    </div>
                                    <div>
                                        <input className="PV-container2_content2-input"></input>

                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div>
                                    <div>
                                        <b>Bench</b>

                                    </div>
                                    <div>
                                        <select className="PV-container2_content2-select">
                                            <option disabled selected hidden>
                                                Choose a selection...
                                            </option>
                                            <option>

                                            </option>
                                        </select>
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <b>Quantity</b>

                                    </div>
                                    <div>
                                        <input className="PV-container2_content2-input"></input>

                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div>
                                    <div>
                                        <b>Beverage Cart</b>

                                    </div>
                                    <div>
                                        <select className="PV-container2_content2-select">
                                            <option disabled selected hidden>
                                                Choose a selection...
                                            </option>
                                            <option>

                                            </option>
                                        </select>
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <b>Quantity</b>

                                    </div>
                                    <div>
                                        <input className="PV-container2_content2-input"></input>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="PV-container2_content3">
                            <div>
                                <h3>Your Customization</h3>
                            </div>
                            <hr />
                            <div>
                                <div>
                                    <div>
                                                                            <b>Qty</b>

                                    </div>
                                    <div>
                                    <input className="PV-container2_content2-input"></input>

                                    </div>
                                </div>
                                <div>
                                    <button className="PV-container2_content3-btn">
                                        Add to Cart
                                    </button>

                                </div>
                                <div>
                                    <h4><b>Price</b></h4>
                                </div>

                                <div>
                                    <h3>Summary</h3>
                                </div>
                                <hr />
                                <div>
                                    <b>Table:</b>
                                    <p>1 X Lippa 36" Round Wood Top Dining Table in White $price</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}
