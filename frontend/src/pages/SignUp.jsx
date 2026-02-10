import { useState } from "react";
import axios from 'axios';
import {Link, Outlet, useNavigate} from "react-router-dom";
import logo from '../assets/logo.jpg';

function SignUp() {

    const navigate = useNavigate();

     const  [email, setEmail] = useState('')
     const  [password, setPassword] = useState('')
     const  [showPassword, setShowPassword] = useState(false);


  return (
      

   <div>
    
    <div className="w-full max-w-100 min-h-screen p-8 flex flex-col justify-start"> 
        
        <div className="mt-8 text-center">
            <div className="inline-flex items-center justify-center w-30 h-30 bg-indigo-600 rounded-full mb-4 shadow-lg shadow-indigo-500/20">
                <img 
                className="rounded-full"
                src={logo} alt="" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Join Melodix</h1>
            <p className="text-zinc-400 mt-2">Stream your rhythm, anywhere.</p>
        </div>

        <form className="space-y-5 mt-10"
          onSubmit={async (e)=>{
            e.preventDefault();
            try {
                await axios.post("http://localhost:3000/api/v1/auth/signup",
                    {
                       email,
                       password,
                    }
                );
                navigate('/')
            } catch (err) {
                console.error(err.response?.data || err.message);
            }
          }}
        
        >
        

            <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1 ml-1">Email Address</label>
                <input type="email" placeholder="hello@music.com" name="email"
                    className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                    onChange={function(elem){
                           const tempE = elem.target.value;
                           console.log(tempE)
                           setEmail(tempE)
                    }}
                    />
            </div>

            <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1 ml-1"> Set Password</label>
                <input type={showPassword? "text":"password"} placeholder="••••••••"  name="password"
                   className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" 
                   onChange={function(elem){
                          const tempP = elem.target.value;
                          console.log(tempP)
                          setPassword(tempP)
                   }}
                   />
                    <button
                         type="button"
                      className=" ml-75 text-zinc-400"
                     onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "👁️" : "🙈"}
                    </button>
                   
            </div>

            <button type="submit" 
               className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl mt-4 shadow-lg shadow-indigo-600/30 active:scale-[0.98] transition-transform cursor-pointer">
                SignUp
            </button>
        </form>

        <div className="mt-10">
                     <p className="text-center text-zinc-500 text-sm mt-8">
                Already have an account? <Link  className="text-indigo-400 font-semibold hover:underline" to={"/login"}>Login</Link>
                <Outlet />
            </p>
        </div>

    </div>


    </div>
  )
}

export default SignUp