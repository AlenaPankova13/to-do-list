import { Component } from 'react';
import './App.css';
import { List } from './List';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <h1 className='container'>To Do List</h1>
          <List/>
      </div>
    )
  }
}

export default App;
