import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'

function App() {

  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"backgroundImage": "url('../src/assets/bg.jpg')"}}>
      <Routes>
        <Route path='login' element={<Login/>}></Route> 
        <Route path='register' element={<Register/>}></Route> 
      </Routes>
    </div>
  )
}

export default App
