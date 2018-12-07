import React from 'react';


const NotesList = (props) => {
    console.log(props.notes);
    return (
        <div >
          <ul className="notes-list list-group">
            {
                props.notes.map(note => {
                    return (<li className="list-group-item"><a>{note}</a></li>)
                })
            }
            {/* 
            <li className="list-group-item"><a>note #2</a></li>
            <li className="list-group-item"><a>note #3</a></li> */}
          </ul>
        </div>
    );
};


export default NotesList;
