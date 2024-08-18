import React from 'react';
import { heart } from '../assets';
const Ourservices = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-10 bg-[#F8F8F8]">
      <div className="w-6/12 flex flex-col items-center">
        <p className="text-[45px] w-full text-black text-center">
          Our Specialties
        </p>
        <hr className="bg-[#9D2553] h-1 w-6/12" />
      </div>
      <span className="p-8 w-full text-center  text-wrap text-lg font-serif text-[#5E5D5D]">
        we offer a comprehensive range of medical services to meet the diverse
        needs of our patients. Our team of skilled healthcare professionals is
        dedicated to providing high-quality care with compassion and expertise.
      </span>
      <div className="flex justify-center gap-4 flex-wrap">
        <div className="flex flex-col items-center w-full md:w-3/12 bg-[#EBF2F7] rounded-md p-3 gap-3 relative">
          <img src={heart} alt="heart" width={60} />
          <p className="text-2xl text-[#165591]">Cardiology</p>
          <span className="text-wrap font-serif text-[#5E5D5D] text-center">
            From expert diagnosis to advanced treatments, navigating your
            heart's journey starts here.
          </span>
          <button className="border-[#165591] border-[1px] border-solid rounded-md p-1 bg-white text-[#165591]">
            Read More
          </button>
        </div>
        <div className="flex flex-col items-center w-full md:w-3/12 bg-[#EBF2F7] rounded-md p-5 gap-3 relative">
          <img src={heart} alt="heart" width={60} />
          <p className="text-2xl text-[#165591]">Cardiology</p>
          <span className="text-wrap font-serif text-[#5E5D5D] text-center">
            From expert diagnosis to advanced treatments, navigating your
            heart's journey starts here.
          </span>
          <button className="border-[#165591] border-[1px] border-solid rounded-md p-1 bg-white text-[#165591]">
            Read More
          </button>
        </div>
        <div className="flex flex-col items-center w-full md:w-3/12 bg-[#EBF2F7] rounded-md p-5 gap-3 relative">
          <img src={heart} alt="heart" width={60} />
          <p className="text-2xl text-[#165591]">Cardiology</p>
          <span className="text-wrap font-serif text-[#5E5D5D] text-center">
            From expert diagnosis to advanced treatments, navigating your
            heart's journey starts here.
          </span>
          <button className="border-[#165591] border-[1px] border-solid rounded-md p-1 bg-white text-[#165591]">
            Read More
          </button>
        </div>
        <div className="flex flex-col items-center w-full md:w-3/12 bg-[#EBF2F7] rounded-md p-5 gap-3 relative">
          <img src={heart} alt="heart" width={60} />
          <p className="text-2xl text-[#165591]">Cardiology</p>
          <span className="text-wrap font-serif text-[#5E5D5D] text-center">
            From expert diagnosis to advanced treatments, navigating your
            heart's journey starts here.
          </span>
          <button className="border-[#165591] border-[1px] border-solid rounded-md p-1 bg-white text-[#165591]">
            Read More
          </button>
        </div>
        <div className="flex flex-col items-center w-full md:w-3/12 bg-[#EBF2F7] rounded-md p-5 gap-3 relative">
          <img src={heart} alt="heart" width={60} />
          <p className="text-2xl text-[#165591]">Cardiology</p>
          <span className="text-wrap font-serif text-[#5E5D5D] text-center">
            From expert diagnosis to advanced treatments, navigating your
            heart's journey starts here.
          </span>
          <button className="border-[#165591] border-[1px] border-solid rounded-md p-1 bg-white text-[#165591]">
            Read More
          </button>
        </div>
        <div className="flex flex-col items-center w-full md:w-3/12 bg-[#EBF2F7] rounded-md p-5 gap-3 relative">
          <img src={heart} alt="heart" width={60} />
          <p className="text-2xl text-[#165591]">Cardiology</p>
          <span className="text-wrap font-serif text-[#5E5D5D] text-center">
            From expert diagnosis to advanced treatments, navigating your
            heart's journey starts here.
          </span>
          <button className="border-[#165591] border-[1px] border-solid rounded-md p-1 bg-white text-[#165591]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
