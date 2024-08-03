import page4Card1Float from "../assets/page4Card1Float.png";
import page4Card2Float from "../assets/page4Card2Float.png";
import page4Card3Float from "../assets/page4Card3Float.png";
import page4Card1 from "../assets/page4Card1.png";
import page4Card2 from "../assets/page4Card2.png";
import page4Card3 from "../assets/page4Card3.png";

const Page4 = () => {
  return (
    <div className="bg-[#eaf0ff] pt-[7.5rem] flex flex-col justify-center items-center">
      <h1 className="text-[#9595DD] text-[2rem] mb-2 font-bold">
        How it works
      </h1>
      <h2 className="text-[#4c4cdb] text-[2.5rem] font-bold">
        Easy Steps to Use the App
      </h2>
      {/* card container */}
      <div className=" grid grid-cols-3 gap-8 my-[6rem] mx-[10rem]">
        {/* card 1 */}
        <div className="h-[65vh] bg-white rounded-[2rem]">
          {/* absolute div for all images */}
          <div className="absolute">
            {/* main image */}
            <img src={page4Card1Float} alt="" className="relative h-[3.56rem] w-[12.9rem] rounded-2xl -top-3 left-[60%] z-[2] shadow-xl" />
            <img src={page4Card1} alt="" className="relative left-[47%] -top-24 z-[1] h-[50vh]" />
          </div>
          {/* text */}
          <article className="pt-[20.5rem] px-4 text-center">
            <h1 className="font-bold mb-2 text-xl">Step <span className="ms-1 text-sm py-1 text-[#4c4cdb] px-[0.6rem] font-extrabold rounded-full bg-[#e6e6f5]">1</span></h1>
            
            <h2 className="font-bold mb-2 text-xl">Search Your Medicines</h2>
            <p className="text-gray-500 font-normal text-[1rem]">Find the medicines you need quickly using our easy search function.</p>
          </article>
        </div>
        {/* card 2 */}
        <div className="h-[65vh] bg-white rounded-[2rem]">
          {/* absolute div for all images */}
          <div className="absolute">
            {/* main image */}
            <img src={page4Card2Float} alt="" className="relative h-[3.56rem] w-[12.9rem] rounded-2xl top-16 left-[60%] z-[2] shadow-xl" />
            <img src={page4Card2} alt="" className="relative left-[47%] -top-24 z-[1] h-[50vh]" />
          </div>
          {/* text */}
          <article className="pt-[20.5rem] px-4 text-center">
          <h1 className="font-bold mb-2 text-xl">Step <span className="ms-1 text-sm py-1 text-[#4c4cdb] px-[0.6rem] font-extrabold rounded-full bg-[#e6e6f5]">2</span></h1>
          <h2 className="font-bold mb-2 text-xl">Upload Prescription</h2>
            <p className="text-gray-500 font-normal text-[1rem]">Upload your prescription for prescription-only medications.</p>
          </article>
        </div>
        {/* card 3 */}
        <div className="h-[65vh] bg-white rounded-[2rem]">
          {/* absolute div for all images */}
          <div className="absolute">
            {/* main image */}
            <img src={page4Card3Float} alt="" className="relative h-[7.2rem] w-[10rem] rounded-2xl -top-3 left-[70%] z-[2] shadow-[0_35px_35px_-1px_rgba(0,0,0,0.3)]" />
            <img src={page4Card3} alt="" className="relative left-[51%] -top-[9.8rem] z-[1] h-[50vh]" />
          </div>
          {/* text */}
          <article className="pt-[20.5rem] px-4 text-center">
          <h1 className="font-bold mb-2 text-xl">Step <span className="ms-1 text-sm py-1 text-[#4c4cdb] px-[0.6rem] font-extrabold rounded-full bg-[#e6e6f5]">3</span></h1>
          <h2 className="font-bold mb-2 text-xl">Place Your Order</h2>
            <p className="text-gray-500 font-normal text-[1rem]">Add items to your cart and proceed to checkout.</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Page4;
