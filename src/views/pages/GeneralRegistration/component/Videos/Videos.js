import { Pagination } from '@material-ui/lab';
import React from 'react'
import NavBar from '../NavBar/NavBar';

const Videos = () => {
    return (
        <>
            <NavBar />
            <div>
                <h2>Add Video</h2>
            </div>
            <div className="video">
                <h3 className="video_title">Add Video</h3>
                <div className="video_container">
                    <h4>At this time only videos hosted on YouTube.com can be posted yo your profile and on the pages of the FPP events you attend.</h4>
                    <div className="video_section1">
                        <div className="video_section1-1">
                            <p>Title</p>
                            <input className="video_section1-input"></input>
                        </div>
                        <div className="video_section1-2">
                            <p>Video URL</p>
                            <input className="video_section1-input"></input>
                        </div>

                    </div>
                    <div>
                        <input type="checkbox"></input>
                        This is my video presentation
                    </div>
                </div>

<div className="video_border">
    <h3 className="video_title">Added Videos</h3>
</div>

                <div className="video_section2">
                    
                    {/* <div className="video_border"> */}
                    <div className="video_section2-title">
                        <p className="video_section2-title-p1">Video</p>
                        <p className="video_section2-title-p2">ACTIONS</p>
                    </div>

                    <div className="video_items">
                        <div className="video_items-title">
                            <div className="video_items-title2"> 
                                <img height="50px" width="50px"></img>
                                <p>name</p>
                            </div>
                        </div>
                        <div className="video_items-btn">
                            <button className="video_items-btn1">edit</button>
                            <button className="video_items-btn2">delete</button>
                        </div>

                    </div>
                    {/* </div> */}
                </div>
                <div className="video_pagination">
                    <Pagination />
                </div>
                
            </div>
        </>
    )
}

export default Videos
