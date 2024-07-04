import { unlockcalendar } from "../../../public"

const Calendar = () => {
  return (
    <>
        <div className="illustration w-full flex justify-center">
          <img src={unlockcalendar} alt="" className=" xl:w-[442px]" />
        </div>
        <div className="textContent w-full flex flex-col justify-start lg:items-start items-center gap-[16px]">
          <h1 className="heading"> How to design your site footer like we did</h1>
          <p className=" subtitle">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
          <button className="px-[32px] py-[14px] rounded-[4px] text-white bg-Brand-Primary">Learn More</button>
        </div>
    </>
  )
}

export default Calendar