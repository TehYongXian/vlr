import React, { Component } from 'react'
import CustomerViewHeader from './CustomerViewHeader'

export default class CustomerView extends Component {
    render() {
        return (
            <div>
                <div>
                    <CustomerViewHeader/>
                </div>
                <div className="CV-coverPic">
                    {/* <img src="https://resi.ze-robot.com/dl/4k/4k-desktop-wallpaper.-1920%C3%971080.jpg" width="920px">
                    </img> */}
                    <div className="CV-coverPic_title">
                        <h5>New Luma Yoga Collection</h5>
                        <h3>Get fit and look fab in new seasonal style</h3>
                        <button className="CV-coverPic_btn">Shop New Yoga</button>
                    </div>
                </div>
            </div>
        )
    }
}
