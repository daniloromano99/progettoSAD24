 import GenderCheckbox from "./GenderCheckbox";

 const SignUp = () => {
 	return (
 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
 					Sign Up <span className='text-blue-500'> CrossChat</span>
 				</h1>

 				<form>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base label-text'>Nome Completo</span>
 						</label>
 						<input type='text' placeholder='Nome Cognome ' className='w-full input input-bordered  h-10' />
 					</div>

 					<div>
 						<label className='label p-2 '>
 							<span className='text-base label-text'>Username</span>
 						</label>
 						<input type='text' placeholder='username' className='w-full input input-bordered h-10' />
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base label-text'>Password</span>
 						</label>
 						<input
 							type='password'
 							placeholder='Digita Password'
 							className='w-full input input-bordered h-10'
 						/>
 					</div>
					<div>
 						<label className='label'>
 							<span className='text-base label-text'>Conferma Password</span>
 						</label>
 						<input
 							type='password'
 							placeholder='Conferma Password'
 							className='w-full input input-bordered h-10'
 						/>
 					</div>

 					<GenderCheckbox />

 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
 						Possiedi già un account?
 					</a>

 					<div>
 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
 					</div>
 				</form>
 			</div>
 		</div>
 	);
 };
 export default SignUp;


/*
 import GenderCheckbox from "./GenderCheckbox";

 const SignUp = () => {
 	return (
 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
 					Sign Up <span className='text-blue-500'> CrossChat</span>
 				</h1>

 				<form>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base label-text'>Nome Completo</span>
 						</label>
 						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
 					</div>

 					<div>
 						<label className='label p-2 '>
 							<span className='text-base label-text'>Username</span>
 						</label>
 						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base label-text'>Password</span>
 						</label>
 						<input
 							type='password'
 							placeholder='Digita Password'
 							className='w-full input input-bordered h-10'
 						/>
 					</div>
					<div>
 						<label className='label'>
 							<span className='text-base label-text'>Conferma Password</span>
 						</label>
 						<input
 							type='password'
 							placeholder='Conferma Password'
 							className='w-full input input-bordered h-10'
 						/>
 					</div>

 					<GenderCheckbox />

 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
 						Possiedi già un account?
 					</a>

 					<div>
 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
 					</div>
 				</form>
 			</div>
 		</div>
 	);
 };
 export default SignUp;*/