// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
     <div className="background-image">
        <img 
          src="/Desktop - 74.png" 
          alt="Background" 
          className="bg-image"
        />
      </div>
<AppRoutes/>
        </div>
    </>
  )
}

export default App
