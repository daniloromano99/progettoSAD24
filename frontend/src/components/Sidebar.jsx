//crea la sidebar dove dentro ci stanno le conversazioni, il bottone per logout,la barra di ricerca, e la chat che si apre
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
 		<div className='border-r border-slate-500 p-4 flex flex-col'>
 			<SearchInput />
 			<div className='divider px-3'></div>
 			{/*<Conversations />
 			<LogoutButton />*/}
 		</div>
 	);
 };
 export default Sidebar;


 //CODICE INIZIALE
 //const Sidebar = () => {
    // 	return (
    // 		<div className='border-r border-slate-500 p-4 flex flex-col'>
    // 			<SearchInput />
    // 			<div className='divider px-3'></div>
    // 			<Conversations />
    // 			<LogoutButton />
    // 		</div>
    // 	);
    // };
    // export default Sidebar;