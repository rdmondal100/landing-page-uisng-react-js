import {
	NexcentWhite,
	ff,
	iconFooter,
	instagram,
	right,
	send,
	twitter,
	youtube,
} from "../../../public";

const Footer = () => {
	return (
		<footer className=' footer mt-[95px] justify-center items-center w-full flex flex-col'>
			<div className='upper w-full gap-[16px]  flex flex-col justify-center items-center p-[32px]'>
				<div className='heading xl:w-[887px] text-[64px] text-center leading-[76px]'>
					Pellentesque suscipit fringilla libero eu.
				</div>
				<button className=' rounded-[4px] text-white bg-Brand-Primary flex px-[32px] py-[14px]'>
					GEt a Demo <img src={right} alt='' />
				</button>
			</div>

			<div className='lower bg-neutralBlack  w-full px-10  xl:px-[165px] py-[64px] flex gap-[125px] flex-col-reverse lg:flex-row '>
			
      
        <div className='brand flex  flex-col gap-[40px] xl:w-1/3 w-full justify-center items-center'>
					<div className='brnad-logo flex gap-[10px]'>
						<img src={iconFooter} alt='' />
						<img
							src={NexcentWhite}
							alt=''
							className=' fill-neutralSilver'
						/>
					</div>
					<div className='rights text-neutralSilver text-[14px] font-[400] leading-[20px] gap-2 flex flex-col'>
						<p className=" w-full">Copyright © 2020 Nexcent ltd.</p>
						<p> All rights reserved</p>
						<p>
							Developed by{" "}
							<a
								href='https://rdmondal.tech'
								className=' text-Brand-Primary'
								target='_blank'
							>
								Riday Mondal
							</a>
						</p>
					</div>
					<div className='socilas flex gap-5'>
						<a href=''>
							<img src={instagram} alt='' />{" "}
						</a>
						<a href=''>
							{" "}
							<img src={ff} alt='' />
						</a>
						<a href=''>
							{" "}
							<img src={twitter} alt='' />
						</a>
						<a href=''>
							{" "}
							<img src={youtube} alt='' />
						</a>
					</div>
				</div>


				<div className='otherInfo justify-around  w-full flex gap-[30px] flex-col lg:flex-row'>
					<div className='company flex flex-col gap-[24px] items-center'>
						<h1 className='heading 
              text-neutraWhite'>Company</h1>
						<ul className='otherlinks text-[14px] font-[400] leading-[20px] flex flex-col gap-[12px] text-neutralSilver'>
							<li>About us</li>
							<li>Blog</li>
							<li>Contact us</li>
							<li>Pricing</li>
							<li>Testimonials</li>
						</ul>
					</div>
					<div className='support flex flex-col gap-[24px] items-center'>
						<h1 className='heading  text-neutraWhite'>Support</h1>
						<ul className='otherlinks text-[14px] font-[400] leading-[20px] flex flex-col gap-[12px] text-neutralSilver'>
							<li>Help center</li>
							<li>Terms of service</li>
							<li>Legal</li>
							<li>Privacy policy</li>
							<li>Status</li>
						</ul>
					</div>					

          <div className='subscribe flex flex-col gap-[24px] items-center'>
						<h1 className='heading text-neutraWhite'>Stay up to date</h1>
						<div className="inputBox flex justify-center items-center relative">
              <input type="email" placeholder="Your email address " className=" rounded-md p-2  placeholder-black" />
              <span className="icon absolute right-6"><img src={send} alt="" /></span>
            </div>
					</div>	

				</div>
			</div>
		</footer>
	);
};

export default Footer;
