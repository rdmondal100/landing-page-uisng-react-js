import {
	logo1,
	logo2,
	logo3,
	logo4,
	logo5,
	logo6,
	logo7,
} from "../../../public/index.js";

const Clients = () => {
	const clients = [
		{
			logo:logo1
		},
		{
			logo:logo2
		},
		{
			logo:logo3
		},
		{
			logo:logo4
		},
		{
			logo:logo5
		},
		{
			logo:logo6
		},
		{
			logo:logo7
		},
	]
	return (
		<>
			<h1 className='heading text-[36px] font-[600] leading-[44px]'>Our Clients </h1>
			<p className='subtitle'>
				We have been working with some Fortune 500+ clients
			</p>
			<div className='clients flex h-[98px] w-full justify-between items-center  self-stretch gap-5'>
				{
					clients?.map((client,index)=>(
						<img src={client?.logo} className='logo w-8' alt=''  key={index}/>

					))
				}
			
			</div>
		</>
	);
};

export default Clients;
