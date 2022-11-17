const NavBrand = ({ navBrand, navImage, className }) => {
  return (
    <div className={`flex gap-1 items-center ${className}`}>
      <div className="overflow-hidden">
        <img src={navImage} alt={navBrand} className="max-w-full" />
      </div>
      <h2 className="font-poppins uppercase font-bold hidden lg:block">{navBrand}</h2>
    </div>
  );
};

export default NavBrand;
