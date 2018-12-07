import React, { Component } from 'react';
import EditorWindow from './EditorWindow';
import NotesList from './NotesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="notes-app">
        <div className="search-bar">
          <input />
        </div>
        <NotesList />
        <EditorWindow />
        </div>
      </div>
    );
  }
}

export default App;
