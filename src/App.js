import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list'
import {SearchBox} from './components/search-box/search-box'
import './App.css';

class App extends Component {
  constructor(){
    super ()
    this.state = {
     monsters:[],
     searchField:''
  }
  }

  async componentDidMount(){
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const body = await res.json()
      this.setState({monsters:body})
    }catch(e){
      console.log(e)
    }
  }
  search = ({target}) => {
    this.setState({searchField:target.value})
  }

  render(){
    const {monsters} = this.state
    const {searchField:search} = this.state
    const filterdedMonsters = monsters.filter(m=>{
      return m.name.toLowerCase().includes(search.toLowerCase())
    })


    return (
    <div className="App">
      <h1>Monsters Roldex</h1>
      <SearchBox  search={this.search} placeholder='search monsters'></SearchBox>
      <CardList key='1' monsters={filterdedMonsters}></CardList>
  </div>
  )
}  
}

export default App;
