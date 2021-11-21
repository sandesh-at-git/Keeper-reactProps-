import React from 'react';

function Note() {
    return (
        <div>

            <div className="note">
                <h1>This is the note title</h1>
                <p>This is the  note content</p>
            </div>
            <div className="note">
                <h1>C programming</h1>
                <p>SemiColon Should not missed in C programming</p>
            </div>

            <div className="note">
                <h1>react</h1>
                <p>import and export are from es6 verison as well as require is from node js</p>
            </div>
            <div className="note">
                <h1>Javascript</h1>
                <p>I think SemiColon is not mandatory</p>
            </div>
        </div>
    );
}
export default Note;