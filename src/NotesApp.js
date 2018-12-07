import React,  {Component} from 'react';
import EditorWindow from './EditorWindow';
import NotesList from './NotesList';
import SearchBar from './SearchBar';

class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNoteId : 10,
            notes: [
                {
                    id: 1001,
                    title: 'note #1',
                    content: 'falalala'
                },

                {
                    id:1002,
                    title: 'note #2',
                    content: 'lalalala'
                },
                {
                    id: 1004,
                    title: 'note #3',
                    content: 'la'
                }


            ]
        }
    }

    render() {
        return (
            <div className="notes-app">
            <h1>NotesApp</h1>
            <SearchBar />
            <NotesList 
             notes = {this.state.notes}
             handleClick = {this._setCurrentNoteId}
             />
            <EditorWindow
            content= {
                this._getById(this.state.currentNoteId).content
            }
            />
            </div>
        );
    }

    _setCurrentNoteId = (noteId) => {
        console.log(`this is the id: ${noteId}`);
        this.setState({
            currentNoteId : noteId
        })
    }

    _getById = (idToFind) =>  {
        // find the object in this.state.notes that has the id === idToFind
        const theOne = this.state.notes.find(note => {
            return note.id === idToFind
        });
        return theOne || { content: ''};
    }
}

export default NotesApp;