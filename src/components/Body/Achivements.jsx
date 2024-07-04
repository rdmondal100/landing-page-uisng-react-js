import { clubAchIcon, eventAchIcon, memberAchIcon, paymentAchIcon } from "../../../public"

const Achivements = () => {
  const achivements = [
    {
      name: 'members',
      img: memberAchIcon,
      count: "2,245,341",

    },
    
    {
      name: 'clubs',
      img: clubAchIcon,
      count: "46,328",

    },
    {
      name: 'Event Bookings',
      img: eventAchIcon,
      count: "2,245,341",

    },
    {
      name: 'payments',
      img: paymentAchIcon,
      count: "1,926,436",

    },

  ]
  return (
    <>
    <div className=" flex flex-col gap-[8px] flex-shrink-0 xl:w-[540px]">
      <h1 className=" heading"> Helping a local <br /> <span className=" text-Brand-Primary"> business reinvent itself</span> </h1>
      <p className="subtitle">We reached here with our hard work and dedication</p>
    </div>
    <div className="stats flex flex-wrap gap-[30px] justify-around items-start">
      {
        achivements.map((item)=>(
          <div className="achivement flex gap-[16px] w-1/3 " key={item.name}>
          <div className="icon">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="counts_label flex flex-col">
            <span>{item.count}</span>
            <span>{item.name}</span>
          </div>
        </div>
        ))
      }



    </div>
    </>
  )
}

export default Achivements