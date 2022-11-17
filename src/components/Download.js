import appleLink from '../assets/download/apple-link.svg';
import androidLink from '../assets/download/android-link.svg';

const Download = () => {
  return (
    <section id="Download">
      <div className="container">
        <div className="flex flex-col py-32 px-4 lg:px-[9.5rem] items-center">
          <div className="w-full lg:w-[66%] text-center">
            <h1 className="text-[38px] text-dark mb-5">Download Aplikasi Keren Ini Sekarang!</h1>
            <p className="text-dark opacity-60 text-lg">Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin sampe begadang, terus juga ditambah weekend. Jadi, please download lah ya.</p>
          </div>
          <div className="flex gap-5 py-10">
            <a href="# ">
              <img src={appleLink} alt="" />
            </a>
            <a href="# ">
              <img src={androidLink} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
