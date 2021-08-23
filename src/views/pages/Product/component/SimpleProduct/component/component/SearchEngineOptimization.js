import React from 'react'


export default function SearchEngineOptimization() {

    
    return (
        <div className="SimpleProduct-container">
            <div className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left">
                    <p className="SimpleProduct-container_p">URL Key</p>
                    <small className="SimpleProduct-container_small">store view</small>
                </div>
                <div className="SimpleProduct-container_right">
                    <input id="URL_key" className="SimpleProduct-container_input"></input>
                </div>
            </div>
            <div  className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left">
                    <p className="SimpleProduct-container_p">Meta Title</p>
                    <small className="SimpleProduct-container_small">store view</small>
                </div>
                <div className="SimpleProduct-container_right">
                    <input id="Meta_Title" className="SimpleProduct-container_input"></input>
                </div>
            </div>
            <div  className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left">
                    <p className="SimpleProduct-container_p">Meta Keywors</p>
                    <small className="SimpleProduct-container_small">store view</small>
                </div>
                <div className="SimpleProduct-container_right">
                    <textarea id="Meta_Keywors" className="SimpleProduct-container_textArea"></textarea>
                </div>
            </div>
            <div  className="SimpleProduct-container_S1">
                <div className="SimpleProduct-container_left">
                    <p className="SimpleProduct-container_p">Meta Description</p>
                    <small className="SimpleProduct-container_small">store view</small>
                </div>
                <div className="SimpleProduct-container_right-noflex">
                    <textarea id="Meta_Description" className="SimpleProduct-container_textArea" maxLength="255"></textarea>
                    <small>Maximum 255 chars. Meta Description should optimally be between 150=160 characters.</small>
                </div>
            </div>
           
        </div>
    )
}
