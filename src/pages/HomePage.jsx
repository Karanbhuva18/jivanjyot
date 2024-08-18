import React from 'react';
import Navbar from './navbar';
import HomeFirstSection from './HomeFirstSection';
import WhatWeDo from './WhatWeDo';
import Ourservices from './Ourservices';
const Homepage = () => {
  return (
    <div className="h-[100vh] w-full">
      <Navbar />
      <HomeFirstSection />
      <WhatWeDo />
      <Ourservices />
    </div>
  );
};

export default Homepage;
