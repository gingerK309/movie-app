import React from 'react'
//import propTypes from "prop-types"

class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    this.setState(current =>({ count: current.count +1 }));
  };
  sub = () => {
    this.setState(current =>({ count: current.count -1 }));
  };
  render() {
    
    return <div>
      <h1> The number is {this.state.count}</h1>
      <button onClick={this.add}>ADD</button>
     
      <button onClick={this.sub}>SUB</button>
    </div>;
  }
}
// add()는 즉시 호출, add는 클릭할때만 호출



export default App;
