import { Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import NavBar from "./components/NavBar"

const App = () => {


  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<h2> This is a home page</h2>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/signin' element={<Login/>} />
    </Routes>
    </>
  )
}

export default App 