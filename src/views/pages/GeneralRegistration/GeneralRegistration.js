import React from 'react'
import NavBar from './component/NavBar/NavBar'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {GeneralData} from '../GeneralRegistration/component/General Data/GeneralData'
import {AlbumsNphotos} from '../GeneralRegistration/component/AlbumsNPhotos/AlbumsNphotos'
import {Videos} from '../GeneralRegistration/component/Videos/Videos'
import {Branches} from '../GeneralRegistration/component/Branches/Branches'
import {ProgramNCourses} from '../GeneralRegistration/component/Program&Courses/ProgramNCourses'

function GeneralRegistration() {
    return (
        <>
        <NavBar/>
            {/* <Router> */}
                
            {/* <div>
                <Switch>
                    <Route excat path="/GeneralData" compoonent={GeneralData}/>
                    <Route path="/ProgramNCourses" compoonent={ProgramNCourses}/>
                    <Route path="/AlbumsNphotos" compoonent={AlbumsNphotos}/>
                    <Route path="/Branches" compoonent={Branches}/>
                    <Route path="/Videos" compoonent={Videos}/>
                </Switch>
            </div>
                 */}
            {/* </Router> */}
        </>
    )
}

export default GeneralRegistration
