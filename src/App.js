import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['anwar','alomgir', 'salman', 'sakib', 'shuvo'];
  const products =[
     {name : 'Photoshop', price : '$90.99'},
     {name : 'Illustrator', price : '$60.99'},
     {name : 'Pdf Reader', price : '$6.99'},
     {name : 'Premier Elements', price : '$249.99'},
    ];
    const productNames = products.map(product => product.name)
    console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          I am a react Person
        </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }

          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
        <Person name={nayoks[1]} naika = "shabnur"></Person>
        <Person name = "Jasim" naika = "moushumi"></Person>
        <Person name = "bapparaj" naika= "zero"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  //  const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users (){
  const [users, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, [])
 
  return (
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(users => <li>{users.name} {users.email}</li>)
        }
      </ul>
    </div>
  )
}
function Person(props){
  const personStyle = {
    border : '2px solid red',
    margin : '10px',
    width : '400px'
  }
  return (
  <div style={personStyle}>
    <h1>Nayok : {props.name}</h1>
    <h3>Hero of {props.naika}</h3>
  </div>
  )
}
function Product (props){
  const productStyle = {
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    height : '200px',
    width : '200px',
    float : 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4> {price} </h4>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
