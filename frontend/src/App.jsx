import SignUp from './pages/SignUp'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='flex items-center justify-center'>
   <Routes>
    <Route path='/signup' element={<SignUp />} /> 
   </Routes>
    </div>
  )
}

export default App