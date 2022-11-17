import HeroImage from '../assets/hero/hero-image.svg';
import Button from './Button';
import TestimonialsCard from './TestimonialsCard';
import star from '../assets/hero/star.svg';
import pImage from '../assets/hero/p-star.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="bg-hero-image bg-no-repeat bg-cover">
      <div className="container px-4 pt-16 lg:pt-20">
        <div className="flex flex-col lg:flex-row py-32 items-center lg:items-start">
          <div className="w-full lg:w-1/2">
            <div className="lg:w-[60%] mx-auto">
              <h1 className="text-[38px] text-dark mb-5">Sebuah cara mudah mengatur jadwal kuliah kamu</h1>
              <p className="text-dark opacity-60 text-lg">Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~</p>
              <div className="flex gap-4 py-10">
                <Button href={'# '} variant={'orange'} children={'Learn More'} size={`lg`} className={`px-3 text-md`} />
                <Button href={'# '} variant={'outline-orange'} children={'Play Demo'} size={`lg`} className={`px-3 text-md`} />
              </div>
              <div className="relative hidden lg:block">
                <TestimonialsCard
                  className={`px-5 py-6 bg-white shadow-primary/10 shadow-xl absolute z-[2]`}
                  image={star}
                  userComments={`“Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima kasih garena!”`}
                  profileImage={pImage}
                  profileName={`P-Star 7`}
                  profileDesc={`Mahasiswa Boating School Ny. Puff`}
                  prevBtn={<FaChevronLeft />}
                  nextBtn={<FaChevronRight />}
                />
                <TestimonialsCard className={`w-[427px] h-[190px] shadow-xl shadow-primary/10 left-12 top-4 absolute bg-white/60 z-[1] backdrop-blur-md`} display={`hidden`} />
                <TestimonialsCard className={`w-[427px] h-[170px] shadow-xl shadow-primary/10 left-16 top-6 absolute bg-white/60 z-[0] backdrop-blur-md`} display={`hidden`} />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={HeroImage} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
