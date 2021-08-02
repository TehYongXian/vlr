import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { NavBarItem } from "./NavBarItem"



function NavBar() {
    return (
        <div className="GeneralRegistration-NavBar">
            {/* <nav> */}
                <ul className="Nav-Bar">
                    <li className="nav-links">
                        <NavLink exact to='/GeneralData' className="nav-links-a" >
                            General Data
                        </NavLink>
                    </li>
                    <li className="nav-links">
                        <NavLink to='/ProgramNCourses' className="nav-links-a">
                            <a >Programs & Courses </a>
                        </NavLink>
                    </li>
                    <li className="nav-links" > 
                        <NavLink to='/AlbumsNphotos' className="nav-links-a">
                            <a >Albums & Photos </a>
                        </NavLink>
                    </li>
                    <li className="nav-links" >
                        <NavLink to='/Branches' className="nav-links-a">
                            <a >Branches </a>
                        </NavLink>
                    </li>
                    <li className="nav-links">
                        <NavLink to='/Videos'  className="nav-links-a">
                            <a >Videos </a>
                        </NavLink>
                    </li>
                </ul>
            {/* </nav> */}
        </div>
    )
}

export default NavBar
