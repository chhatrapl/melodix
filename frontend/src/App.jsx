import LogIn from './pages/LogIn'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import {Routes, Route} from 'react-router-dom'
import SongUpload from './pages/SongUpload'
import HomePage from './pages/HomePage'
import CreateArtist from './pages/createArtist'
import SongPlay from './pages/SongPlay'

function App() {
  return (
    <div className=' app flex items-center justify-center'>
   <Routes>
    <Route path='/signup' element={<SignUp />} /> 
    <Route path='/login' element={<LogIn />} /> 
    <Route path='/' element={<HomePage />} /> 
    <Route path='*' element={<NotFound />} />
    <Route path='/songupload' element={<SongUpload />} />
    <Route path='/createartist' element={<CreateArtist />} />
    <Route path='/musicplay' element={<SongPlay />} />

   </Routes>
    </div>
  )
}

export default App