const TestimonialsCard = ({ image, altImage, userComments, profileImage, profileName, profileDesc, className, prevBtn, nextBtn, display }) => {
  return (
    <div className={`flex flex-col gap-3 rounded-md ${className}`}>
      <img src={image} alt={altImage} className="w-[120px]" />
      <p className="text-dark">{userComments}</p>
      <div className="flex gap-1">
        <div className="overflow-hidden w-1/6 ">
          <img src={profileImage} alt={profileName} className="max-w-full mx-auto" />
        </div>
        <div className="grow">
          <p className="text-md text-black/90 font-semibold">{profileName}</p>
          <p className="text-sm text-dark/80">{profileDesc}</p>
        </div>
        <div className={`w-1/4 flex gap-1 items-center justify-center text-primary ${display}`}>
          <button className="rounded-full bg-primary/30 w-[35px] h-[35px] flex justify-center items-center">{prevBtn}</button>
          <button className="rounded-full bg-primary/30 w-[35px] h-[35px] flex justify-center items-center">{nextBtn}</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
