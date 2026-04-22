import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Bold, Italic } from 'lucide-react'
import MusicProvider from './Context/MusicProvider.jsx'
import './index.css'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

 const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(

 
  
  <QueryClientProvider client={queryClient}> 
     <ReactQueryDevtools initialIsOpen={false} />
  <MusicProvider>
  <BrowserRouter>
  <Toaster containerStyle={{top:'45%'}}  toastOptions={{style:{
    fontSize:20, 
    width:500, 
    height:150,
    textTransform:'uppercase', 
    fontWeight:Bold,
    color:'white',
    background:'gray'
    }}} />
  <App />
  </BrowserRouter>
  </MusicProvider >
  </QueryClientProvider>
)
