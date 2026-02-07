import LogIn from './pages/LogIn'
import MusicPlaying from './pages/MusicPlaying'
import SignUp from './pages/SignUp'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='flex items-center justify-center bg-black'>
   <Routes>
    <Route path='/signup' element={<SignUp />} /> 
    <Route path='/login' element={<LogIn />} /> 
    <Route path='/' element={<MusicPlaying />} /> 
   </Routes>
    </div>
  )
}

export default App