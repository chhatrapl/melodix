import LogIn from './pages/LogIn'
import MusicPlaying from './pages/MusicPlaying'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import {Routes, Route} from 'react-router-dom'
import SongUpload from './pages/SongUpload'

function App() {
  return (
    <div className=' app flex items-center justify-center'>
   <Routes>
    <Route path='/signup' element={<SignUp />} /> 
    <Route path='/login' element={<LogIn />} /> 
    <Route path='/' element={<MusicPlaying />} /> 
    <Route path='*' element={<NotFound />} />
    <Route path='/songupload' element={<SongUpload />} />
   </Routes>
    </div>
  )
}

export default App