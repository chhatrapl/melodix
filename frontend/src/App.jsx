import LogIn from './pages/LogIn'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import {Routes, Route} from 'react-router-dom'
import SongUpload from './pages/SongUpload'
import HomePage from './pages/HomePage'
import CreateArtist from './pages/createArtist'
import SongPlay from './pages/SongPlay'
import LikedSongs from './pages/LikedSongs'
import  Layout  from './component/Layout'

function App() {
  return (
    <div className=' app '>
      
   <Routes>
    <Route path='/signup' element={<SignUp />} /> 
    <Route path='/login' element={<LogIn />} />
   

    <Route element={<Layout />}>
     <Route path='/songupload' element={<SongUpload />} /> 
    <Route path='/createartist' element={<CreateArtist />} />
    <Route path='/' element={<HomePage />} /> 
    <Route path='*' element={<NotFound />} />
    <Route path='/musicplay' element={<SongPlay />} />
    <Route path='/my-like' element={<LikedSongs />} />
    </Route>

   </Routes>
   
    </div>
  )
}

export default App