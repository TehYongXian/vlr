import React from 'react'
import NavTab from './component/NavTab/NavTab'
import Tab from './component/NavTab/Tab'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GeneralData from './component/GeneralData/GeneralData'
import AlbumsNphotos from './component/AlbumsNPhotos/AlbumsNphotos'
import Videos from './component/Videos/Videos'
import Branches from './component/Branches/Branches'
import ProgramNCourses from './component/Program&Courses/ProgramNCourses'
class GeneralRegistration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 'General Data'
        }
    }

    setSelected = (tab) => {
        this.setState({ selected: tab });
    }

    render() {
        return (
            <div className="GR-NavTab">
                <NavTab tabs={['General Data', 'Programs & Courses', 'Albums & Photos', 'Branches', 'Videos']} selected={this.state.selected} setSelected={this.setSelected}>

                    <Tab isSelected={this.state.selected === 'General Data'}>
                        <GeneralData />
                    </Tab>

                    <Tab isSelected={this.state.selected === 'Programs & Courses'}>
                        <ProgramNCourses />
                    </Tab>

                    <Tab isSelected={this.state.selected === 'Albums & Photos'}>
                        <AlbumsNphotos />
                    </Tab>

                    <Tab isSelected={this.state.selected === 'Branches'}>
                        <Branches />
                    </Tab>

                    <Tab isSelected={this.state.selected === 'Videos'}>
                        <Videos />
                    </Tab>

                </NavTab>

                {/* <Router>
                
            <div>
                <Switch>
                    <Route excat path="/generalData" compoonent={GeneralData}/>
                    <Route excat path="/programNCourses" compoonent={ProgramNCourses}/>
                    <Route excat path="/albumsNphotos" compoonent={AlbumsNphotos}/>
                    <Route excat path="/branches" compoonent={Branches}/>
                    <Route excat path="/videos" compoonent={Videos}/>
                </Switch>
            </div>
</Router> */}


            </div>
        )
    }
}

export default GeneralRegistration
