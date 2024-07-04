import { illustration } from "../../../public";

const Hero = () => {
	return (
		<>
			<div className='hero-left flex flex-col lg:justify-start justify-center items-center lg:items-start text-center lg:text-start'>
				<h1 className='heading text text-[64px] leading-[76px] font-[600]'>
					Lessons and insights <br />{" "}
					<span className=' text-Brand-Primary'> from 8 years</span>
				</h1>
				<div>
					<p className=' subtitle mb-[32px] text-[16px] font-[400] leading-[24px]'>
						{" "}
						Where to grow your business as a photographer: site or
						social media?
					</p>
				</div>
				<a href='' className=" bg-Brand-Primary rounded-[4px] px-[32px] py-[14px] w-auto max-w-[128px] text-white">Register</a>
			</div>
			<div className='hero-left illustration  xl:w-[391px] h-[407px] hidden lg:block'>
				<img src={illustration} alt='' />
			</div>
		</>
	);
};

export default Hero;
