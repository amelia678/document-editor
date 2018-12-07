import React from 'react';


const NotesList = (props) => {
    return (
        <div >
          <ul className="notes-list list-group">
            <li className="list-group-item"><a>note #1</a></li>
            <li className="list-group-item"><a>note #2</a></li>
            <li className="list-group-item"><a>note #3</a></li>
          </ul>
        </div>
    );
};


export default NotesList;
