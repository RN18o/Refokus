import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Customcursor from "./components/Customcursor";

const App = () => {
   new LocomotiveScroll();
  return (
    <div className='w-full h-auto bg-zinc-900 text-white font-["satoshi"] overflow-hidden'>
      {/* <Customcursor /> */}
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
