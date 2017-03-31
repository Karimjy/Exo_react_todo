import React, { Component } from 'react';

import io from 'socket.io-client'
let socket = io.connect("localhost:3500")
console.log('connect')

class Chat extends Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

    this.state = {
      inputValue: "",
      data: {}
    }

  }

  onInputChange(event){
    this.setState({
      inputValue: event.target.value,
    });
  }

  componentDidMount() {
    socket.on(`client:sendMessage`, data => {
      console.log('message: ' + data);
      // this.state.data.push(data);
      // this.setState({ data });
      document.getElementById('messages').inner
    })
  }

  sendMessage = () => {
    console.log("okk ",this.state.inputValue)
    socket.emit('client:sendMessage', this.state.inputValue);
  }

  render() {
     return (
       <div>
          <ul id="messages"></ul>
          <input type="text"  id="m" value={this.state.inputValue} onChange={this.onInputChange} />
          <button onClick={this.sendMessage}>Send</button>
        </div>
     );
   }
 }
 export default Chat;
