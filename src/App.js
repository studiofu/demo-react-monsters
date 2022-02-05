import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

// react app and using class, need to extend react component
class App extends Component {

  constructor() {
    super();

    // init the states
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount(){
    // fetch return a promise object, promise => to have a value return
    // promise take resolve and reject parameter
    // resolve a value and reject a value
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    .catch(error => console.log(error)) // if something wrong in the api call

    console.log(this.state.monsters);
  }

  handleChange = (e) => {
    // e.target means the element that triggered the event
    this.setState({searchField: e.target.value}, () => console.log(this.state));

    // remark: if we don't pass the callback function to the setState to console log the state,
    // the state shown in the console may not be the most updated value as setState is async function
    // i.e. this.setState({searchField: e.target.value}); console.log(this.state);
    // the result is not the expected value

    // remark 2: if writing the handleChange function like this, the setState is undefined
    // handleChange(e) { thi.setState(...) }, we need to bind the function to the object
    // need to add to constructor: this.handleChange = this.handleChange.bind(this);
    // but we don't need this if we use es6 arrow function
    // handleChange = (e) => { .... }
    // this binding is tricky
  }
 
  render() {
    // state contain monters and searchField and break them and assigned to variable using {x,y,z}
    const { monsters, searchField} = this.state;

    // apply filter to search
    const filterMonsters = monsters.filter(x => x.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search cats' handleChange={this.handleChange} />
        <CardList monsters={filterMonsters} />
      </div>
    )
  } 
}

export default App;
