import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class CustomerViewHeader extends Component {
    render() {
        return (
            <div className="CV-containerHeader">
                <div className="CV-containerHeader_info">
                    <div className="CV-containerHeader_warning">
                        <small className="CV-containerHeader_warning-small">This is demo store. No orders will be fulfiled</small>
                    </div>
                    <div className="CV-containerHeader_info">
                        <small className="CV-containerHeader_info-p">Default welcome msg <Link className="CV-containerHeader_info-a"><a className="CV-containerHeader_info-a">Sign in</a></Link> or <Link className="CV-containerHeader_info-a"><a className="CV-containerHeader_info-a">Create an Account</a></Link></small>
                    </div>
                    
                </div>
                <div className="CV-containerHeader_info2">
                    <div className="CV-containerHeader_img">
                        <img  src="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/35/d0/72/35d072dc-a6b9-071f-90fc-58666d20e792/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png" width="100px" height="60px" className="CV-containerHeader_logo"></img>
                    </div>
                    
                    <div className="CV-containerHeader_search">
                        <div className="CV-containerHeader_search2">
                            <input placeholder="Search..."></input>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="c-icon c-icon-2xl" role="img"><polygon fill="var(--ci-primary-color, currentColor)" points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039" class="ci-primary"></polygon><path fill="var(--ci-primary-color, currentColor)" d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z" class="ci-primary"></path></svg>
                        </div>
                        
                    </div>
                    
                </div>
                
                <div className="CV-containerHeader_btn-group">
                    <button className="CV-containerHeader_btn-group-btn">What's New</button>
                    <button className="CV-containerHeader_btn-group-btn">Women</button>
                    <button className="CV-containerHeader_btn-group-btn">Men</button>
                    <button className="CV-containerHeader_btn-group-btn">Gear</button>
                    <button className="CV-containerHeader_btn-group-btn">Training</button>
                    <button className="CV-containerHeader_btn-group-btn">Sale</button>
                    <button className="CV-containerHeader_btn-group-btn">Restaurant</button>
                </div>

                
                
            </div>
        )
    }
}
