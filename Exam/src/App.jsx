
import Navpar from './Components/Navpar'
import Home from './Components/Home'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <Navpar/> */}
  {/* <Home/> */}

  {/* <SignUp/> */}
 
  <Routes>
  
 
     <Route  path="/" element={<SignUp/>}/>
      <Route  path="/SignIn" element={<SignIn/>}/>
       <Route  path="/home" element={<Home/>}/>
    

  </Routes> 
    </>
  )
}

export default App
