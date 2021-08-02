import NavBar from "../NavBar/NavBar";
import React from 'react'
import Dropzone from "./Dropzone";

const AlbumsNphotos = () => {
    return (
        <>
        <NavBar/>
        <div>
            <h2 >Albums/Photos</h2>
        </div>
        <div className="AnP-container">
            <h3 className="AnP-title">Albums/Photos</h3>

            <div className="leftsidedropZone">
            <h4>Create album and upload your photos.</h4>

                <div className="AnP-container_section1">
                    <div className="AnP-container_leftInput">
                        <p>Title</p>
                        <input className="AnP-container_input"></input>
                    </div>
                    <div className="AnP-rightInput">
                        <p>Description</p>
                        <input className="AnP-container_input"></input>
                    </div>
                </div>
                <Dropzone/>

                <div>
                    <button className="AnP-btnSave">Save</button>
                    <button className="AnP-btnRemove">Remove All</button>
                </div>
            </div>
            <div className="AnP-container_section2">
                <div className="AnP-container_section2-headerTitle">
                <h2 className="AnP-title">Added Albums/Photos</h2>
                </div>

                <div className="AnP-section2-title">
                    <p className="AnP-section2-title_p1">Album</p>
                    <p className="AnP-section2-title_p2">Actions</p>
                </div>

                <div className="AnP-picture-section">
                    <img height="50px" width="50px"></img> 
                    <div className="AnP-picture-items">
                         
                         <div>
                             <p>test</p>
                             <p>0 photos</p>
                         </div>
                    </div>

                   <div className="AnP-picture-itemsBtn">
                    <button className="AnP-btnDelete">delete</button>
                    <button className="AnP-btnEdit">edit</button>
                   </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AlbumsNphotos
