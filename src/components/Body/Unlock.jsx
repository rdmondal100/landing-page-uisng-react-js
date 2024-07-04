import { frame35 } from "../../../public"

const Unlock = () => {
  return (
    <>
    <div className="illustration  justify-center items-center py-[52px]">
      <img src={frame35} alt="" />
    </div>
    <div className="textcontent w-full flex flex-col gap-[20px] lg:items-start items-center">
      <h1 className="heading text-[36px] font-[600] leading-[44px] text-neutralDGrey">The unseen of spending three years at Pixelgrade</h1>
      <p className=" subtitle text-[14px] font-[400] leading-[20px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
      <button className=" px-[32px] py-[14px] rounded-[4px] text-white bg-Brand-Primary">Learn More</button>
    </div>
    </>
  )
}

export default Unlock