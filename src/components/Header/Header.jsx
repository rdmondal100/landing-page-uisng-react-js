import Community from "./Community";
import Clients from "./Clients";
import Hero from "./Hero";
import Navbar from "./Navbar";
const Header = () => {
	return (
		<header className=" relative flex flex-col gap-[40px] ">
			<nav className=" flex  justify-between px-10 fixed w-full z-50  h-20 lg:gap-10
	 items-center flex-shrink-0 bg-Tint-T3/20  backdrop-blur-lg backdrop-brightness-100 " id="nav">{<Navbar />}</nav>
			<div className='hero flex py-[96px] px-10 md:px-16 xl:px-[144px] gap-[104px] items-center bg-neutralSilver 
		lg:min-h-[100vh]'>{<Hero />}</div>
			<div className='clients flex flex-col items-center gap-[16px] py-0 px-10 md:px-16 xl:px-[144px]'>{<Clients />}</div>
			<div className='community flex flex-col items-center gap-[8px]'>{<Community />}</div>
		</header>
	);
};



export default Header;
