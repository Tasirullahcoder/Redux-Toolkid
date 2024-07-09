import React,{useReducer} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart';

const App = () => {
  // const initialstate=0;
  // const reducer=(state,action)=>{
  //   switch(action){
  //     case "increment":
  //       return state+1
  //       case "decrement":
  //         return state-1
  //         default: return state
  //   }
  // }
  // const [state, dispatch] = useReducer(reducer, initialstate)
  return (
    <>
    {/* <button onClick={()=>{dispatch("increment")}}>INC</button>
    <button onClick={()=>{dispatch("decrement")}}>DEC</button>
    {state} */}
      <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
       </Routes>
       </BrowserRouter>
      
     
    </>
  )
}

export default App
