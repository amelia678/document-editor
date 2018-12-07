import React,  {Component} from 'react';
import EditorWindow from './EditorWindow';
import NotesList from './NotesList';
import SearchBar from './SearchBar';

class NotesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNoteId : 10,
            searchTerm: '',
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
                },

                {
                    id: 1006,
                    title: 'note #4',
                    content: 'hahahHAHAHAHAH'
                }


            ]
        }
    }

    render() {
        return (
            <div className="notes-app">
            <h1>NotesApp</h1>
            <SearchBar 
            searchTerm= {this.state.searchTerm}
            handleInput = {this._setSearchTerm}
                />
            <NotesList 
             notes = {this._searchNotes(this.state.searchTerm)}
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

    _setSearchTerm = (term) => {
        console.log(`they said: ${term}`);
        this.setState({
            searchTerm: term
        })
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

    _searchNotes = (term) => {
        // filter out any notes that do not
        // include the term in either title
        // or content
        const filteredNotes = this.state.notes.filter(note => {
            const termIsInTitle = note.title.includes(term);
            const termISInContent = note.content.includes(term);

            return termIsInTitle || termISInContent
        });
        return filteredNotes;
    }
}

export default NotesApp;