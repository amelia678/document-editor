import React,  {Component} from 'react';
import EditorWindow from './EditorWindow';
import NotesList from './NotesList';
import SearchBar from './SearchBar';

class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                'here are your thoughts'
            }
            />
            </div>
        );
    }
}

export default NotesApp;