import React, {Component} from 'react';


const SearchBar = (props) => {
 return (
    <div className="search-bar form-group">
    <input 
    type="text" 
    className="form-control" 
    id="userInput" 
    placeholder="Search for something"
    value = {props.searchTerm}
    onChange={(event) => {
        props.handleInput(event.target.value);
    }} />
  </div>
 )
}


export default SearchBar;