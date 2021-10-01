// import React from 'react'
// import {useState, useEffect} from 'react'

import { Route, Switch } from "react-router";
import Header from "./Components/Header";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Main from "./Pages/Main/Main";


function App(){
  // const [state, setState] = useState('Omurbek')

  // const handleSubmit = () =>{
  //   setState('Viktorry')
  // }


  // const [count, setCount] = useState(1)



  // const [text, setText] = useState('')
  
  // useEffect(() =>{
  //   console.log('Rendering...');
  // }, [])
  

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contacts}/>
      </Switch>
      



      {/* <h1>Hello {state}</h1>

      <button onClick={handleSubmit}>Change name</button>
      <button onClick={() =>{
        setState('Jasur')
      }}>Change</button> */}



      {/* <h1>Hello, i'm {count} years old</h1>
      <button onClick={() =>{
          setCount(count+1)
      }}>Plus</button>

      <button onClick={() =>{
          setCount(count-1)
      }}>Minus</button> */}


      {/* <input type="text" placeholder="Text" onChange={(e) => setText(e.target.value)}/> */}
      
      
      
    </>
  )
}

export default App;
