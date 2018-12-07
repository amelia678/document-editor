import React, { Component } from 'react';
import EditorWindow from './EditorWindow';
import NotesList from './NotesList';
import SearchBar from './SearchBar';
import NotesApp from './NotesApp'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotesApp />
        <SearchBar />
        <NotesList />
        <EditorWindow />
        
      </div>
    );
  }
}

export default App;
