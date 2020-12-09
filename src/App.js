import React from 'react'

function Hello({name}) {
  return (<h1>{name} world~!</h1>);
}
const greet = [
  {
  name: "Hello"
  },
  {
    name: "안녕하세요"
  },
  {
    name: "こんにちは"
  },
  {
    name: "Bonjour"
  }];

function App() {
  return (
    <div >
   {greet.map(greeting =><Hello name={greeting.name} />)}  
    </div>
  );
}

export default App;
