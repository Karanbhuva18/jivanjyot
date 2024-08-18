import React from 'react';
import { ClinicIcon } from '../assets';

const WhatWeDo = () => {
  return (
    <div className="flex justify-center flex-col items-center p-10">
      <div>
        <p className="text-[45px] text-black">What We Do</p>
        <hr className="bg-[#9D2553] h-1 w-full" />
      </div>
      <span className="pt-8 w-full text-center  text-wrap text-lg font-serif text-[#5E5D5D]">
        We bring healthcare to your convenience, offering a comprehensive range
        of on-demand medical services tailored to your needs. Our platform
        allows you to connect with experienced online doctors who provide expert
        medical advice, issue online prescriptions, and offer quick refills
        whenever you require them.
      </span>
      <div className="flex flex-col justify-center items-center lg:flex-row  pt-16 gap-4 ">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-full p-8 shadow-2xl rounded-md bg-white border-[1px] border-solid border-slate-500"
          >
            <img src={ClinicIcon} alt="Clinic Icon" width={50} />
            <p className="text-xl text-center font-semibold text-[#4e4a4a] mt-4">
              Best Prescription By Doctor
            </p>
            <span className="text-[#272525] text-center mt-2">
              Our team of experienced cardiologists and medical experts use
              state-of-the-art technology to assess your cardiovascular health
              and design personalized treatment plans. From comprehensive
              screenings to advanced interventions, we are committed to helping
              you maintain a healthy heart and lead a fulfilling life.
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
