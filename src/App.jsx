import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Loku from './Components/todo'
import TogleSwitch from './Components/Toggleswitch/TogleSwitch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* // <div className='aa'>
    //     <Loku />
    // </div> */}
    <TogleSwitch />

    </>
   );
   
}

export default App
