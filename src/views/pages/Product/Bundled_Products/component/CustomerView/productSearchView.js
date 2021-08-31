import React, { Component } from 'react'
import CustomerViewHeader from './CustomerViewHeader'


export default class productSearchView extends Component {
    render() {
        return (
            <div className="productSearchView-container">
                <CustomerViewHeader />
                <div className="productSearchView-container_title">
                    <h2>Search results for: 'item name'</h2>
                </div>
                <div className="productSearchView-container_content">
                    <div className="productSearchView-container_content-left">
                        <div>
                            <b>Shopping Options</b>
                            <hr />
                            <select>
                                <option disabled selected hidden>
                                    Caregory
                                </option>
                            </select>
                        </div>
                        <hr />
                        <div>
                            <h6>Compare Products</h6>
                            <p>You have no items to compare</p>

                        </div>
                        <div>
                            <h6>My Wish List</h6>
                            <p>You have no items in your wish list</p>
                        </div>

                    </div>
                    <div className="productSearchView-container_content-right">
                        <div className="productSearchView-container_content-header">
                            <div className="productSearchView-container_content-header-left">
                                <button  className="productSearchView-container_sizeBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="c-icon c-icon-2xl" role="img"><path fill="var(--ci-primary-color, currentColor)" d="M88,32a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,32Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,128Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M256,32a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,32Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,128Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M424,160a64,64,0,1,0-64-64A64.072,64.072,0,0,0,424,160Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,424,64Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M88,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,288Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M424,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,288Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M88,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,448Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M256,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,448Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M424,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,448Z" class="ci-primary" ></path></svg></button>
                                <button className="productSearchView-container_sizeBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="c-icon c-icon-2xl" role="img"><path fill="var(--ci-primary-color, currentColor)" d="M16,64V448H496V64ZM464,240H352V96H464Zm-272,0V96H320V240Zm128,32V416H192V272ZM160,96V240H48V96ZM48,272H160V416H48ZM352,416V272H464V416Z" class="ci-primary"></path></svg></button>
                                <p>items 1-9 of 25</p>
                            </div>
                            <div className="productSearchView-container_content-header-right">
                                <p>Sort By</p>
                                <select>
                                    <option disabled selected hidden>
                                        Relevance
                                    </option>
                                </select>
                            </div>
                        </div>
                            <div className="productSearchView-container_content-item-container">
                                <div className="productSearchView-container_content-item">
                                    <img width="120px" height="150px"></img>
                                    <div>
                                        <p>Item Name</p>
                                        <p>From<p>$price</p></p>
                                        <p>To<p>$price</p></p>
                                    </div>
                                </div>
                                <div className="productSearchView-container_content-item">
                                <img width="120px" height="150px"></img>
                                    <div>
                                        <p>Item Name</p>
                                        <p>From<p>$price</p></p>
                                        <p>To<p>$price</p></p>
                                    </div>
                                </div>
                                <div className="productSearchView-container_content-item">
                                <img width="120px" height="150px"></img>
                                    <div>
                                        <p>Item Name</p>
                                        <p>From<p>$price</p></p>
                                        <p>To<p>$price</p></p>
                                    </div>
                                </div>
                                <div className="productSearchView-container_content-item">
                                <img width="120px" height="150px"></img>
                                    <div>
                                        <p>Item Name</p>
                                        <p>From<p>$price</p></p>
                                        <p>To<p>$price</p></p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
