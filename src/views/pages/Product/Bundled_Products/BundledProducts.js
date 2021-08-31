import React, { Component } from 'react'
import Header3 from '../component/header/Header3'
import BPContent from './component/BPContent'
import BundledPage from './component/BundledPage'

export default class BundledProducts extends Component {
    render() {
        return (
            <div>
                <Header3/>

                    <div>   
                        <BundledPage/>
                    </div>
                    <BPContent/>

            </div>
        )
    }
}
