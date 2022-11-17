import NavImage from '../assets/footer/nav-image.svg';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <div className="container px-4 lg:px-[9.5rem]">
        <div className="flex flex-col-reverse gap-3 lg:flex-row pt-20 pb-5 lg:py-20 border-t justify-between">
          <div className="w-full lg:w-[35%]">
            <div className="flex flex-row gap-2 ">
              <img src={NavImage} alt="Brand Logo" />
              <h1 className="font-bold text-lg py-3">ZeitPlan</h1>
            </div>
            <p className="text-base text-justify lg:text-start text-dark/80 mb-3">
              Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal mabar, jadwal makan, jadwal liga inggris, dan jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami sudah berusaha semaksimal mungkin.
            </p>
            <p className="text-base text-center lg:text-start text-dark/80 font-semibold">
              COPYRIGHT (C) 2021.
              <a href="https://www.figma.com/@mhd" className="underline" target="_blank" rel="noreferrer">
                DESIGN BY NAUVAL
              </a>
              . CONVERTED BY AZMI
            </p>
          </div>
          <div className="hidden lg:block lg:w-[20%]">
            <h1 className="mb-5">Sitemap</h1>
            <ul className="flex flex-col gap-2 text-dark/80">
              <li className="">Beranda</li>
              <li>Fitur-fitur</li>
              <li>Harga</li>
              <li>Testimoni</li>
              <li>Download</li>
            </ul>
          </div>
          <div className="hidden lg:block lg:w-[20%]">
            <h1 className="mb-5">Partner</h1>
            <ul className="flex flex-col gap-2 text-dark/80">
              <li>Sefan.ru</li>
              <li>Ganool</li>
              <li>Waptrick</li>
              <li>Stafaband</li>
              <li>MyWapBlog</li>
              <li>Friv</li>
            </ul>
          </div>
          <div className="w-full lg:w-[20%]">
            <h1>Tetep Terhubung</h1>
            <p className="text-dark/80 py-5">Lihat kami pansos di sosial media berikut:</p>
            <ul className="flex gap-3">
              <li className="bg-primary/10 text-primary p-3 rounded-full">
                <FaInstagram size={24} />
              </li>
              <li className="bg-primary/10 text-primary p-3 rounded-full">
                <FaFacebook size={24} />
              </li>
              <li className="bg-primary/10 text-primary p-3 rounded-full">
                <FaTwitter size={24} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
