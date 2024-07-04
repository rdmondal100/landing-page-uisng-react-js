import { image18, image19, image20, right } from "../../../public";

const CommunityUpdates = () => {
	const cards = [
		{
			image: image18,
			desc: "Creating Streamlined Safeguarding Processes with OneRen",
		},
		{
			image: image19,
			desc: "What are your safeguarding responsibilities and how can you manage them?",
		},
		{
			image: image20,
			desc: "Revamping the Membership Model with Triathlon Australia",
		},
	];
	return (
		<>
			<div className='textContent text-center flex flex-col gap-[8px] xl:max-w-[628px]'>
				<h1 className=' heading'>Caring is the new marketing</h1>
				<p className=' subtitle '>
					The Nexcent blog is the best place to read about the latest
					membership insights, trends and more. See who's joining the
					community, read about how our community are increasing their
					membership income and lot's more.​
				</p>
			</div>

			<div className=' flex w-full justify-between items-center gap-16 flex-col xl:flex-row  gap-y-44'>
				{cards.map((card, index) => (
					<div
						className='relative w-full  flex  justify-center items-center  flex-wrap gap-[100px]'
						key={index}
					>
						<img src={card.image} alt='' className=" 
           w-full" />
						<div className='subCard z-30 -mt-[96px]    flex flex-col text-center gap-[16px] p-[16px] absolute w-4/5  -bottom-24 '>
							<p className='subtitle  text-[20px] font-[600] leading-[28px] text-ellipsis line-clamp-3 '>
								{card.desc}
							</p>
							<a
								href='#'
								className=' flex justify-center items-center text-Brand-Primary gap-[8px] cursor-pointer'
							>
								Readmore <img src={right} alt='' />
							</a>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default CommunityUpdates;
