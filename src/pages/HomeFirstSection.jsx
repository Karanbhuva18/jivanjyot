import React from 'react';
import { Clinic } from '../assets';

const HomeFirstSection = () => {
  return (
    <div className="w-full bg-[#F3F6FF] p-6 md:p-12 flex flex-col  md:flex-row  lg:justify-between xl:justify-around md:items-center gap-6 md:gap-2">
      <div className="flex flex-col md:w-6/12 max-w-3xl w-full">
        <p className="text-[30px] md:text-[40px] font-semibold py-6 md:py-10 xl:text-[50px]">
          Your Health is <br /> Our
          <span className="text-[#1A8EFD]">Primary Concern</span>
        </p>
        <p className="leading-7 text-base md:text-lg xl:text-2xl ">
          We serve our community by providing exceptional care, as we prevent
          illness, restore health, and provide comfort to all who entrust us
          with their care.
        </p>
      </div>
      <img
        className="rounded-lg w-full md:w-6/12 lg:w-3/5 xl:w-5/12 max-w-4xl"
        src={Clinic}
        alt="clinicImg"
      />
    </div>
  );
};

export default HomeFirstSection;
