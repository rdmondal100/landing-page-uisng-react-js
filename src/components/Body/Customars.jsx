import { image9, logoCus1, logoCus2, logoCus3, logoCus4, logoCus5, logoCus6, right } from "../../../public"

const Customars = () => {
  const customarLogo = [
    {
      image: logoCus1
    },
    {
      image: logoCus2
    },
    {
      image: logoCus3
    },
    {
      image: logoCus4
    },
    {
      image: logoCus5
    },
    {
      image: logoCus6
    },
  ]
  return (
    <>
    <div className="image xl:w-[332px] w-full flex items-center justify-center">
      <img src={image9} alt="" />
    </div>
    <div className="textContent w-full flex flex-col gap-[18px]">
      <p className="subtitle">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
      <div className="title font-[600] text[20px] text-Brand-Primary">Tim Smith</div>
      <p className="subtitle">British Dragon Boat Racing Association</p>
      <div className=" flex  justify-center w-full  items-center gap-9 flex-wrap md:flex-nowrap">
        <div className="logos w-full flex xl:gap-[41px] justify-between">
          {customarLogo.map((item,index)=>(
            <img src={item.image} className="xl:w-[20px] h- h-[20px]" key={index}></img>
          ))}
        </div>
      <a href="#" className="customars  flex font-[600] text[20px] text-Brand-Primary"> <p> Meet all customers </p> <img src={right} alt="" /></a>
      </div>
    </div>
    </>
  )
}

export default Customars