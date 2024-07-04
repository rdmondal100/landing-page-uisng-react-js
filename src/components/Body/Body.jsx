import Unlock from "./Unlock.jsx";
import Achivements from "./Achivements.jsx";
import Calendar from "./Calendar.jsx";
import Customars from "./Customars.jsx";
import CommunityUpdates from "./CommunityUpdates.jsx";
const Body = () => {
	return (
		<main className=' flex flex-col gap-[60px] '>
			<div className='unlock flex w-full justify-between items-center px-10 md:px-16 xl:px-[144px] flex-col lg:flex-row text-center lg:text-start'>
				{<Unlock />}
			</div>
			<div className='achivementsn py-[64px] w-full flex justify-between items-center bg-neutralSilver px-10 md:px-16 xl:px-[144px] flex-col lg:flex-row gap-10 text-center lg:text-start'>
				{<Achivements />}
			</div> 
			<div className='calendar w-full flex justify-between items-center px-10 md:px-16 xl:px-[144px] flex-col lg:flex-row text-center lg:text-start'>
				{<Calendar />}
			</div>
			<div className='customars w-full flex justify-between items-center px-10 md:px-16 xl:px-[144px] gap-[40px]  flex-col lg:flex-row text-center lg:text-start'>{<Customars />}</div>
			<div className='communityupdates w-full flex justify-between items-center px-10 md:px-16 xl:px-[144px] flex-col gap-[40px]'>{<CommunityUpdates />}</div>
		</main>
	);
};

export default Body;
