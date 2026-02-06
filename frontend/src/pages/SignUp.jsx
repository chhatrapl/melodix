

function SignUp() {
  return (
    <div>
    
    <div class="w-full max-w-[400px] min-h-screen p-8 flex flex-col justify-between">
        
        <div class="mt-8 text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4 shadow-lg shadow-indigo-500/20">
                <i class="fas fa-headphones-alt text-3xl"></i>
            </div>
            <h1 class="text-3xl font-bold tracking-tight">Join Melodix</h1>
            <p class="text-zinc-400 mt-2">Stream your rhythm, anywhere.</p>
        </div>

        <form class="space-y-5 mt-10">
        

            <div>
                <label class="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1 ml-1">Email Address</label>
                <input type="email" placeholder="hello@music.com" 
                    class="w-full bg-zinc-900 text-white border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
            </div>

            <div>
                <label class="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1 ml-1"> Set Password</label>
                <input type="password" placeholder="••••••••" 
                    class="w-full bg-zinc-900 border border-zinc-800 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
            </div>

            <button type="submit" 
                class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl mt-4 shadow-lg shadow-indigo-600/30 active:scale-[0.98] transition-transform cursor-pointer">
                SignUp
            </button>
        </form>

        <div class="mt-10">
                     <p class="text-center text-zinc-500 text-sm mt-8">
                Already have an account? <a href="#" class="text-indigo-400 font-semibold hover:underline">Log in</a>
            </p>
        </div>

    </div>


    </div>
  )
}

export default SignUp