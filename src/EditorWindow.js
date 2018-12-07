import React from 'react';


const EditorWindow = (props) => {
    return (
        <textarea 
        className="form-control editor-window" 
        rows="3" 
        value={props.content}
        /> 
    )
}


export default EditorWindow;