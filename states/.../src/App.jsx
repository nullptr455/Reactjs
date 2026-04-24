import { useState } from 'react'
import './App.css'

function App() {
     const [num,setNum] = useState(10);
     function inrease(){
       setNum(num+1);
     }
     function decrease(){
       setNum(num-1);
     }
        
  return (
  <div>
    <div>{num}</div>
    <button onClick={decrease}>decrease</button>
    <button onClick={inrease}>increase</button>
  </div>
  )
}

export default App
