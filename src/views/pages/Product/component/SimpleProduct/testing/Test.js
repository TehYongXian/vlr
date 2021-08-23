import React from 'react'
import { saveAs } from 'file-saver';


function Test() {
    const SaveData = () => {
            const blob = new Blob([document.getElementById('input').value],
            { type: "text/plain;charset=utf-8" });
            saveAs(blob, "static.txt");
    };

    return (
        <div>
            <input id="input"></input>
            <button onClick={SaveData}>download</button>
        </div>
    )
}

export default Test
