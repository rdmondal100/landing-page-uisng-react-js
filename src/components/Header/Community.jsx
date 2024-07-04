import { club, membership, national } from "../../../public";

const Community = () => {
  const community = [
    {
      name:membership,
      img:membership,
      header:"Membership Organisations",
      desc: "Our membership management software provides full automation of membership renewals and payments",

    },
    {
      name:national,
      img:national,
      header:"National Associations",
      desc: "Our membership management software provides full automation of membership renewals and payments",

    },
    {
      name:club,
      img:club,
      header:"Clubs And Groups",
      desc: "Our membership management software provides full automation of membership renewals and payments",

    },
  ]
	return <>
    <div className="text-center">
      <h1 className="heading xl:w-[542px] text-[36px] font-[600] leading-[44px] ">Manage your entire community in a single system</h1>
      <p className="subtitle mt-[8px]">Who is Nextcent suitable for?
      </p>
    </div>
    <div className="services flex  justify-between items-start px-10 md:px-16 xl:px-[144px] w-full flex-col lg:flex-row gap-8">
      {
        community.map((item)=>(
      <div className={`${item.name} card flex flex-col gap-[16px]  items-center  text-center py-[24px] px-[32px] xl:w-[299px]`} key={item.name} >
        <div className="icon relative">
          <img src={item.img} alt="" className=" w-10"/>
          <span className="xl:w-[50px] h-[49px] bg-Tint-T5 absolute rounded-tl-[20px] rounded-br-[20px] rounded-[5px] -z-[1] -top-1 
           -left-1"></span>
        </div>
        <h1 className="heading text-[28px] font-[700] leading-[36px]">{item.header}</h1>
        <p className="subtitle">{item.desc}</p>
      </div>

        ))
      }
  

    </div>

    <hr className=" w-full border-Tint-T2 rounded-md  absolute -bottom-10 border-t-4 lg:hidden" />
  </>;
};

export default Community;
