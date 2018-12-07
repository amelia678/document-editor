import React,  {Component} from 'react';
import EditorWindow from './EditorWindow';
import NotesList from './NotesList';
import SearchBar from './SearchBar';

class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNoteIndex : 0,
            notes: [
                {
                    title: 'note #1',
                    content: 'falalala'
                },

                {
                    title: 'note #2',
                    content: 'lalalala'
                },
                {
                    title: 'note #3',
                    content: 'la'
                }


            ]
        }
    }

    render() {
        return (
            <div className="notes-app">
            <SearchBar />
            <NotesList 
             notes = {this.state.notes.map(note => note.title
             
                )}
             />
            <EditorWindow
            content= {
                this.state.notes[this.state.currentNoteIndex].content
            }
            />
            </div>
        );
    }
}

export default NotesApp;