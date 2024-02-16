import { useState } from 'react';
import './App.css';

function App() {
  const[x, setX] = useState(0);
 

  return (
    <>
    <div className='text1'>

    Count:{x} 

    </div>

     
     <button className='btn' onClick={() => setX(x-1)}>Increment</button>
     <button className="btn"
     onClick={() => setX(x+1)}>Decrement</button>
    </>
  )
}

export default App;
