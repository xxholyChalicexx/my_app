import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      list:[],
      text:"",
    }
  }

  async handleSearch(e){
    this.setState({
      text: e.target.value
    })
    const res = await axios.get(`http://localhost:8000?word=${this.state.text}`)
    console.log(res.data.texts)
    
    this.setState({
      list: res.data.texts
    })
  
    
  }
  //  async componentDidMount (){
  //   const res = await axios.get(`http://localhost:8000?word=${this.state.text}`)
  //   this.setState({
  //     list:res.data.texts
  //   })
  //   console.log(this.state.list)
    
  //}
  render(){
    return(
      <div>
      <input type="text" placeholder="Search..." onChange={this.handleSearch.bind(this)} />
      <div>
        {this.state.list.map(item => <li key={Math.random()}>{item.name}</li>)}
      </div>
      </div>
    );
  }
}

export default App;
