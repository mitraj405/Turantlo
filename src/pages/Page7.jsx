import React from 'react';

const Page7 = () => {
  return (
    <div className="bg-[#eaf0ff] pt-[7.5rem] flex flex-col justify-center items-center">
      
      <div className="relative flex justify-between items-center bg-[#4C4CDB] m-[8rem] px-[4rem] py-[4rem] h-[85vh] rounded-[2.5rem] overflow-hidden z-0 before:content-[''] before:absolute before:top-1/2 before:left-[40rem] before:w-[40rem] before:h-[40rem] before:bg-[#4949D1] before:rounded-full before:transform before:-translate-x-1/6 before:-translate-y-1/3 before:z-[-1]">
        <div className="flex flex-col w-1/3 gap-[1.5rem]">
        <h1 className="text-[white] text-[3rem] mb-2 font-bold">Let's download free from apple and play store</h1>
      
          
          <p className="text-[1rem] text-[white]">
            Download our app today to enjoy a user-friendly interface, exclusive offers, and quick access to essential features. Available on both iOS and Android, our app ensures a seamless experience at your fingertips. Get started now and unlock a world of convenience!
          </p>
          <div className="flex items-center mb-4">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="apple_store_link.png" alt="Apple Store" className="h-[3rem] w-[3rem]" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="ml-4">
              <img src="google_play_link.png" alt="Google Play Store" className="h-[3rem] w-[3rem]" />
            </a>
          </div>
        </div>

        <div>
          {/*insert phone mockup here */}
        </div>
      </div>
    </div>
  );
}

export default Page7;
