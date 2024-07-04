import { useState } from "react";
import { icon, Nexcent } from "../../../public/index.js";
import { GiCrossedBones } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
	const [menuIcon,setMenueIcon]= useState(false)

	const menueItems = [
		{ name: "Home" },
		{ name: "Service" },
		{ name: "About" },
		{ name: "Product" },
		{ name: "Testimonial" },
		{ name: "FAQ" },
	];

	window.addEventListener('scroll', function() {
		const navbar = document.getElementById('nav');
		if (window.scrollY > 10) {
				navbar.classList.add('shadow-lg');
		} else {
				navbar.classList.remove('shadow-lg');
		}
});




const handleMenue = ()=>{
	if(menuIcon){

		setMenueIcon(false)
	}else{
		setMenueIcon(true)
	}
	console.log(menuIcon)


	const menuBar = document.getElementById("menuBar")
console.log(menuBar)

if (menuBar.classList.contains('-right-full')) {
	console.log( "yes")
	menuBar.classList.remove('-right-full');
	menuBar.classList.add('right-0');
} else {
	console.log("NO")
	menuBar.classList.remove('right-0');
	menuBar.classList.add('-right-full');
}


}




	return (
		<>
			<div className='logo inline-flex items-center xl:w-[105px] h-[30px] gap-2'>
				<img src={icon} alt='' className='xl:w-[35px] h-[24px]' />
				<img
					src={Nexcent}
					alt=''
					className='xl:w-[111.49px] h-[20.662px]'
				/>
			</div>
			<div className="menuBar lg:w-full w-76 flex justify-between xl:ml-32 items-center px-8 xl:gap-12  bg-Tint-T2  absolute  top-0  flex-col lg:flex-row py-10 gap-8 lg:relative lg:bg-transparent  transition-all ease-in-out duration-500 -right-full lg:right-0  lg:h-20 shadow-lg lg:shadow-none" id="menuBar">
			<div className='menue   lg:inline-flex  '>
				<ul className='inline-flex justify-center items-start xl:gap-[50px] lg:gap-7 gap-5 flex-col  lg:flex-row'>
					{menueItems.map((item) => (
						<li key={item?.name} className='menue-item lg:hover:text-Brand-Primary  hover:text-white scale-100 hover:scale-110 transition-all ease-in-out hover:translate-y-1 duration-500'>
							<a href="" className="">
							{item?.name}

							</a>
						</li>
					))}
				</ul>
			</div>
			<div className='login_signup flex gap-[14px]  justify-center items-center'>
				<a
					href=''
					className='login rounded-[6px] px-3 py-2 text-white border-white lg:text-Brand-Primary lg:hover:text-white hover:bg-Brand-Primary'
				>
					Login
				</a>
				<a
					href=''
					className='signup bg-Brand-Primary rounded-[6px] px-3 py-2 text-white  '
				>
					Sign up
				</a>
			</div>
			</div>


			<button className="menuToggle  flex justify-center items-center absolute right-5 lg:hidden hover:-translate-y-2 hover:scale-110 hover:rotate-[25deg] transition-all duration-500 ease-in-out p-5" onClick={handleMenue}>
					<GiHamburgerMenu className={`${!menuIcon? " scale-150":"scale-0 "}  absolute transition-all ease-in-out duration-300 hover:text-Brand-Primary `} id="hamberger"/>
					<GiCrossedBones className={`${menuIcon? "scale-100":"scale-0 "}  absolute  transition-all ease-in-out duration-300 hover:text-red-700`} id=" cross"/>
			</button>
		</>
	);
};

export default Navbar;

