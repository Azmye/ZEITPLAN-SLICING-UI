import NavBrand from './NavBrand';
import navImage from '../assets/navbar/nav-image.svg';
import Navlinks from './Navlinks';
import Button from './Button';
import { HiArrowLongRight } from 'react-icons/hi2';
import { IoMdMenu } from 'react-icons/io';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="absolute left-0 right-0 px-4 top-3 py-10 z-[9999] lg:px-0">
      <div className="flex items-center justify-center shadow-md rounded-lg bg-white container px-4 lg:px-10 py-8 lg:w-[1230px] relative">
        <NavBrand navImage={navImage} navBrand={`zeitplan`} className={`mr-auto`} />
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <IoMdMenu size={28} />
        </button>
        <div className={`items-center lg:flex ${isOpen ? 'block absolute top-full left-0 right-0 mt-5 bg-white shadow-xl p-5 rounded-md lg:m-0 lg:p-0 lg:static lg:bg-transparent lg:shadow-none' : ' hidden lg:flex'}`}>
          <Navlinks className={`ml-auto mr-5  ${isOpen ? 'flex-col gap-2 lg:gap-8 lg:flex-row' : 'gap-8'}`} />
          <Button href={`# `} className={`flex items-center gap-1 justify-center mt-5 lg:mt-0`} variant={`orange`} children={`Download`} btnIcon={<HiArrowLongRight />} size={`md`} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
