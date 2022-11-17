import featureImage from '../assets/feature/feature-image.svg';
import FeatureCard from './FeatureCard';
import { FiCloudOff, FiVideo, FiTrash2 } from 'react-icons/fi';
import { BsBell } from 'react-icons/bs';

const Feature = () => {
  return (
    <section id="feature">
      <div className="container">
        <div className="flex flex-col lg:flex-row py-32 px-4 lg:px-[9.5rem]">
          <div className="w-full lg:w-1/2">
            <img src={featureImage} alt="Feature" />
          </div>
          <div className="w-full lg:w-1/2 my-auto">
            <div className="">
              <h1 className="text-[38px] text-dark mb-5">Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran nich~</h1>
              <p className="text-dark opacity-60 text-lg py-5">Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo kuliah tapi jarang masuk, titip absen doang!</p>
              <div className="grid grid-cols-2 gap-10 mt-5">
                <FeatureCard cardIcon={<FiCloudOff size={35} />} cardTitle={`Tidak Tersimpan Otomatis`} cardDesc={`Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.`} />
                <FeatureCard cardIcon={<FiVideo size={35} />} cardTitle={`Si Rizal Gak Pernah Ngonten`} cardDesc={`Emang sih dia gak pernah ngonten, do'ain ya biar mau ngonten.`} />
                <FeatureCard cardIcon={<FiTrash2 size={35} />} cardTitle={`Terhapus Otomatis`} cardDesc={`Data lo bakal kehapus otomatis tiap hari, biar hemat server kita.`} />
                <FeatureCard cardIcon={<BsBell size={35} />} cardTitle={`Nggak Tau Lagi Gw`} cardDesc={`Mikir teks buat konten susah bro, ini aja ngasal masih susah!`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
