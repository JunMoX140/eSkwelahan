import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Page/login'
import Register from './Page/register'



function App() {
  const [count, setCount] = useState(0)

  return (
    
   <div>
    < Login />
    < Register />
   </div>
  
  )
}

export default App
