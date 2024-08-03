import page2Mock from '../assets/page2Mock.png'
import page2Icon1 from '../assets/page2Icon1.png'
import page2Icon2 from '../assets/page2Icon2.png'
import page2Icon3 from '../assets/page2Icon3.png'

const Page2 = () => {
  return (
    <div className="bg-[#eaf0ff] pt-[7.5rem] flex flex-col justify-center items-center">
      <h1 className="text-[#9595DD] text-[2rem] mb-2 font-bold">Our Features</h1>
      <h2 className="text-[#4c4cdb] text-[2.5rem] font-bold">Features that Make Your Life Easier</h2>
      <div className="relative flex justify-between items-center bg-white m-[8rem] px-[4rem] h-[85vh] rounded-[2.5rem] overflow-hidden z-0 before:content-[''] before:absolute before:top-1/2 before:left-[29rem] before:w-[40rem] before:h-[40rem] before:bg-[#4c4cdb] before:rounded-full before:transform before:-translate-x-1/6 before:-translate-y-1/3 before:z-[-1]">
        <div className="flex flex-col w-1/3 gap-[1.5rem]">
            <article className="">
                <img src={page2Icon1} alt="" className="h-[3rem] w-[4rem] mb-3" />
                <h1 className="text-[1.25rem] mb-[0.3rem] font-semibold text-[#3c3c3c]">Real-Time Tracking</h1>
                <p className="text-[1rem] text-[#868686]">Track your orders in real-time from our pharmacy to your door.</p>
            </article>
            <article className="">
                <img src={page2Icon2} alt="" className="h-[3rem] w-[4rem] mb-3" />
                <h1 className="text-[1.25rem] mb-[0.3rem] font-semibold text-[#3c3c3c]">FreeDoctors Consultation</h1>
                <p className="text-[1rem] text-[#868686]">Book a free doctor consultation at your convenience and receive online medical advice for your illnesses.</p>
            </article>
            <article className="">
                <img src={page2Icon3} alt="" className="h-[3rem] w-[4rem] mb-3" />
                <h1 className="text-[1.25rem] mb-[0.3rem] font-semibold text-[#3c3c3c]">Secure Payments</h1>
                <p className="text-[1rem] text-[#868686]">Choose from multiple payment options to suit your needs, all while enjoying the highest level of security with advanced encryption technology</p>
            </article>
        </div>
      </div>
        <div className='absolute left-[50%]'>
            <img src={page2Mock} alt="" className='h-[90vh]' />
        </div>
    </div>
  )
}

export default Page2