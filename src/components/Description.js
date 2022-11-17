import DescCard from './DescCard';
import { FiDatabase, FiWifiOff } from 'react-icons/fi';
import { IoPersonOutline, IoCodeOutline } from 'react-icons/io5';

const Description = () => {
  return (
    <section id="description">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center py-32 px-4 lg:px-[9.5rem]">
          <div className="w-full lg:w-1/2">
            <div className="w-full lg:w-4/5">
              <h1 className="text-[38px] text-dark mb-5">Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?</h1>
              <p className="text-dark opacity-60 text-lg">Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung gak berdua.</p>
              <div className="flex w-full lg:w-2/3 font-inter mt-14 divide-x">
                <div className="w-1/2 lg:w-2/5 flex flex-col items-center lg:items-start">
                  <p className="uppercase text-dark/70 text-xs">TOTAL DON'TLOUD</p>
                  <p className="font-semibold text-dark text-lg">1,501,234</p>
                </div>
                <div className="w-1/2 lg:w-2/5 flex flex-col items-center">
                  <p className="uppercase text-dark/70 text-xs">TOTAL USERS</p>
                  <p className="font-semibold text-dark text-lg">1,318,829</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 lg:mt-0 place-items-center">
              <DescCard cardIcon={<FiDatabase size={24} />} cardTitle={`Aplikasi Gratis`} description={`Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US.`} />
              <DescCard cardIcon={<FiWifiOff size={24} />} cardTitle={`Kode OTP Error`} description={`Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa.`} />
              <DescCard cardIcon={<IoPersonOutline size={24} />} cardTitle={`Data Tidak Aman`} description={`Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb.`} />
              <DescCard cardIcon={<IoCodeOutline size={24} />} cardTitle={`Biasanya Error`} description={`Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu aplikasi pemerintah~`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
