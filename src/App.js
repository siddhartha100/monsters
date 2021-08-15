import React,  { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
//import {MyComponent} from './components/test/MyComponent';
import {SearchBox} from './components/serach-box/search-box.component';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:''
    };

    //this.handleChange = this.handleChange.bind(this); --> needs for non array function
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (event) => {
    this.setState(( prevState,prevProps ) => {
       return {searchField: event.target.value}
      })
    //this.setState({searchField: event.target.value});
  }

  render(){

    const { monsters, searchField} = this.state;
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter( item => item.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox placeHolder='Search Monsters' handleChange = {this.handleChange}/>
        {/*<CardList monsters={this.state.monsters}></CardList>*/}
        <CardList monsters={filteredMonsters}></CardList>
    </div>
    );
  }
}

export default App;
