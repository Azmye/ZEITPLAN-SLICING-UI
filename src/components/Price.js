import PriceCard from './PriceCard';
import { BsCheckLg } from 'react-icons/bs';
import Button from './Button';

const Price = () => {
  const firstCard = ['Jadwal Tak Terbatas', 'Fitur Notifikasi (Kadang Telat)', 'Mode Gelap', 'Bisa Topup Pulsa', 'Bisa Beli Token Listrik', 'Data Lo Dijual'];
  const secondCard = ['Semua Fitur Sebelumnya', 'Diingetin Makan', 'Sleepcall Sampe Bobo', 'Ditemenin Jalan Tiap Minggu', 'Ditemenin Nonton Eksekswan', 'Terhindar Razia Rambut', 'Dapet Izin Bikin Ormas'];
  const thirdCard = ['Semua Fitur Sebelumnya', 'Dibayarin Kuliah 4 Semester', 'Dibayarin Cicilan Motor', 'Dicicilin KPR 12 Tahun', 'Magang di NASA Cab. Depok', 'Dapet Skin Alok', 'Nonton Film Gratis di Ganool', 'Naik Haji Bila Mampu'];
  return (
    <section id="price" className="bg-price-image bg-cover bg-no-repeat">
      <div className="container">
        <div className="flex flex-col py-32 px-4 lg:px-[9.5rem] items-center">
          <div className="w-full lg:w-[47%] text-center">
            <h1 className="text-[38px] text-dark mb-5">Main catur sambil bersepeda, beda harga beda fitur</h1>
            <p className="text-dark opacity-60 text-lg">Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa juga sih, untuk gantinya kami kasih fitur yang spesial buat kamu!</p>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-8 justify-center py-16">
            <div className="w-full lg:w-[28%]">
              <PriceCard
                cardText={`RINDURATU`}
                cardTitle={`Free`}
                cardDesc={`Akses ke semua fitur gratis tapi data lo dijual ke agen khusus US.`}
                data={firstCard}
                listIcon={<BsCheckLg size={12} />}
                priceBtn={<Button size={`full`} variant={`orange`} children={`Download`} />}
              />
            </div>
            <div className="w-full lg:w-[28%]">
              <PriceCard
                cardText={`SULTAN`}
                cardTitle={`Rp 100K`}
                cardDesc={`Sama aja data lo juga tetep dijual, tapi lo dapet fitur yang lain.`}
                data={secondCard}
                listIcon={<BsCheckLg size={12} />}
                priceBtn={<Button size={`full`} variant={`orange`} children={`Download`} />}
              />
            </div>
            <div className="w-full lg:w-[28%]">
              <PriceCard
                cardText={`RAFATAR`}
                cardTitle={`Rp 10000K`}
                cardDesc={`Ini juga sama aja, data lo dijual juga. Tapi fitur-fiturnya lebih ok.`}
                data={thirdCard}
                listIcon={<BsCheckLg size={12} />}
                priceBtn={<Button size={`full`} variant={`orange`} children={`Download`} />}
              />
            </div>
          </div>
          <div className="w-full lg:w-[47%] text-center">
            <p className="text-dark/80">
              <span className="font-bold">Harap Diingat:</span> Harga di atas belum termasuk KKM, dan harga sewaktu-waktu bisa berubah secara mendadak seperti pengumuman PPKM darurat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
