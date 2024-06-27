import { IoSearchSharp } from "react-icons/io5";
//IoSearchSharp preso dall'API "ReactIcon" basta cercarla su internet. E' l'icona della lente d'ingrandimento per il search
const SearchInput = () => {
 	return (
 		<form className='flex items-center gap-2'>
 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
 				
 			</button>
 		</form>
 	);
 };
export default SearchInput;


//CODICE INIZIALE

//import { IoSearchSharp } from "react-icons/io5";
// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };
// export default SearchInput;