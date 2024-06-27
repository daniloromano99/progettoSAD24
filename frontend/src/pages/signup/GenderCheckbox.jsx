 const GenderCheckbox = () => {
 	return (
 		<div className='flex'>
 			<div className='form-control'>
 				<label className={`label gap-2 cursor-pointer`}>
 					<span className='label-text'>Maschio</span>
 					<input type='checkbox' className='checkbox border-slate-100' />
 				</label>
 			</div>
 			<div className='form-control'>
 				<label className={`label gap-2 cursor-pointer`}>
 					<span className='label-text'>Femmina</span>
 					<input type='checkbox' className='checkbox border-slate-100' />
 				</label>
 			</div>
 		</div>
 	);
 };
export default GenderCheckbox;

//starter code di questo file

// const GenderCheckbox = () => {
// 	return (
// 		<div className='flex'>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Maschio</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Femmina</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 		</div>
// 	);
// };
// export default GenderCheckbox;