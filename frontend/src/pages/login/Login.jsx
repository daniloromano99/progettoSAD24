const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
	<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
			Login
			<span className='text-blue-500'> CrossChat </span>
		</h1>

        <form>
            <div>
                <label className='label p-2'>
                    <span className='text-gray-300'>Username</span>
                </label>
                <input type='text'  placeholder='Inserisci Username' className='w-full input input-bordered h-10'/>
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-gray-300'>Password</span>
                </label>
                <input type='text'  placeholder='Inserisci Password' className='w-full input input-bordered h-10'/>
            </div>
            <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Non"} hai ancora un account?
            </a>

            <div> 
                <button className='btn btn-block btn-sm mt-2'>Login</button>
            </div>

        </form>


    </div>
    </div>

  )
}

export default Login;

/*
const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
	<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
			Login
			<span className='text-blue-500'> CrossChat </span>
		</h1>

        <form>
            <div>
                <label className='label p-2'>
                    <span className='text-gray-300'>Username</span>
                </label>
                <input type='text'  placeholder='Inserisci Username' className='w-full input input-bordered h-10'/>
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-gray-300'>Password</span>
                </label>
                <input type='text'  placeholder='Inserisci Password' className='w-full input input-bordered h-10'/>
            </div>
            <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Non"} hai ancora un account?
            </a>

            <div> 
                <button className='btn btn-block btn-sm mt-2'>Login</button>
            </div>

        </form>


    </div>
    </div>

  )
}

export default Login; */ 