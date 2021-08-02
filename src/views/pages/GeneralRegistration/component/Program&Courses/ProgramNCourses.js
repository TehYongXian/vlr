import React from 'react'
import NavBar from '../NavBar/NavBar';

const ProgramNCourses = () => {
    return (
        <>
            <NavBar />
            <h2>Programs and Courses</h2>
            <div className="programNcourses">

                <h2 className="programNcourses_title">Programs</h2>

                <div className="programNcourses_container">
                    What kind of programs do you offer to students?
                    <div className="programNcourses_containerCB">
                        <div className="programNcourses_checkbox">
                            <input type="checkbox"></input>
                            &nbsp; Language Courses
                        </div>
                        <div className="programNcourses_checkbox">
                            <input type="checkbox"></input>
                            &nbsp; Undergraduate / Community College / Technical
                        </div>
                        <div className="programNcourses_checkbox">
                            <input type="checkbox"></input>
                            &nbsp; Secondary
                        </div >
                        <div className="programNcourses_checkbox">
                            <input type="checkbox"></input> 
                            &nbsp; Extension / Certificate / Diploma
                        </div>
                        <div className="programNcourses_checkbox">
                            <input type="checkbox"></input>
                            &nbsp; Graduate / Postgraduate
                        </div>
                        <div className="programNcourses_checkbox">
                            <input type="checkbox"></input>
                            &nbsp; MBA
                        </div>
                        <div className="programNcourses_checkbox">
                            <input type="checkbox"></input>
                            &nbsp; Online Distance Learning
                        </div>
                        <div className="programNcourses_checkbox">
                            <input type="checkbox"></input>
                            &nbsp; Vocational / Career / Technical
                        </div>
                    </div>

                    <h2 className="programNcourses_title">Courses</h2>
                    
                    <div className="programNcourses_section2">
                        What kind of programs do you offer to students?

                        <div >
                            <select className="programNcourses_section2-select">
                                <option>
                                    Business & Management
                                </option>
                            </select >
                            <br />
                            <select className="programNcourses_section2-select">
                                <option>
                                    Science
                                </option>
                            </select>
                            <br />
                            <select className="programNcourses_section2-select">
                                <option>
                                    Arts And Humanities
                                </option>
                            </select>
                            <br />
                            <select className="programNcourses_section2-select">
                                <option>
                                    Engineering
                                </option>
                            </select>
                            <br />
                            <select className="programNcourses_section2-select">
                                <option>
                                    Healthcare
                                </option>
                            </select>
                        </div>
                        <button className="programNcourses_btn">SAVE</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ProgramNCourses
