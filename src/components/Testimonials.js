import TestimonialsCard from './TestimonialsCard';
import fiveStars from '../assets/testimonials/fiveStars.svg';
import oneStars from '../assets/testimonials/oneStars.svg';
import threeStars from '../assets/testimonials/threeStars.svg';
import firstProfile from '../assets/testimonials/profile-1.svg';
import secondProfile from '../assets/testimonials/profile-2.svg';
import thirdProfile from '../assets/testimonials/profile-3.svg';
import forthProfile from '../assets/testimonials/profile-4.svg';
import fifthProfile from '../assets/testimonials/profile-5.svg';
import sixthProfile from '../assets/testimonials/profile-6.svg';
const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-testi-image bg-cover bg-no-repeat">
      <div className="container">
        <div className="flex flex-col py-32 px-4 lg:px-[9.5rem] items-center">
          <div className="w-full lg:w-[47%] text-center">
            <h1 className="text-[38px] text-dark mb-5">Apa kata umat manusia tentang aplikasi keren ini?</h1>
            <p className="text-dark opacity-60 text-lg">Kami tidak memfilter semua review, males soalnya. Jadi semua yang ditampilkan di sini semuanya asli tanpa reksadana.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-14 place-items-center">
            <TestimonialsCard
              image={fiveStars}
              altImage={`Rating`}
              userComments={'“Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu kuliah nomor satu! 👈😎👉”'}
              profileImage={firstProfile}
              profileName={`Sanusi Sulivan`}
              profileDesc={`Dosen di Boating School Ny. Puff `}
              className={`bg-white p-8 w-[369px] h-fit`}
              display={`hidden`}
            />
            <TestimonialsCard
              image={oneStars}
              altImage={`Rating`}
              userComments={'“Gara-gara aplikasi ini aku tidak bisa bolos kuliah, padahal cita-citaku ingin bolos kuliah dan menitipkan absen saja. Huft.”'}
              profileImage={secondProfile}
              profileName={`Wahyu Hayuk`}
              profileDesc={`Mahasiswa Abadi`}
              className={`bg-white p-8 w-[369px] h-fit`}
              display={`hidden`}
            />
            <TestimonialsCard
              image={fiveStars}
              altImage={`Rating`}
              userComments={'“Hanya di rezim ini ada aplikasi yang membuat anak saya menjadi rajin kuliah walaupun tidak menjadi pandai. Terima kasih Papa Zola!”'}
              profileImage={thirdProfile}
              profileName={`Ibu Scarlet Darkening`}
              profileDesc={`Ibunya Wahyu Hayuk`}
              className={`bg-white p-8 w-[369px] h-fit`}
              display={`hidden`}
            />
            <TestimonialsCard
              image={threeStars}
              altImage={`Rating`}
              userComments={'“Aq kmrn koq instla di hp qu gx bs y? ap krn aq pke hp miTho? admin tLonk dnk bntU instlA d hp qu, aq mw pKe apkx”'}
              profileImage={forthProfile}
              profileName={`Indah Cyank Dya Clmax`}
              profileDesc={`Works at Looking For True Love, Inc`}
              className={`bg-white p-8 w-[369px] h-fit`}
              display={`hidden`}
            />
            <TestimonialsCard
              image={oneStars}
              altImage={`Rating`}
              userComments={
                '“Pengiriman cepat,,, seller ramah,, packing juga rapih, tapi barangnya belom dicoba... saya kasih bintang satu dulu,,,, nanti kalo udah dicoba saya kasih bintang dua,,, nanti kalo udah peterpen jadi bintang di surga... xixixixi... 😀😀😀😀😀”'
              }
              profileImage={fifthProfile}
              profileName={`Jumadi RT. 03`}
              profileDesc={`Ketua RT. 06`}
              className={`bg-white p-8 w-[369px] h-fit`}
              display={`hidden`}
            />
            <TestimonialsCard
              image={fiveStars}
              altImage={`Rating`}
              userComments={
                '“aplikasinya keren! mjb, nder.... aku numpang lapak yaaa ... Jual Netflix Spotify disney plus Youtube prem Iqiyi Grammarly Viu Canva Wetv Vidio Mola tv picsart Tezza Unfold Aligh motion Vsco Lightroom get contact apple music amazon prime resso iflix Microsoft 365 HBO GO zoom.”'
              }
              profileImage={sixthProfile}
              profileName={`Cucunya Megalodon`}
              profileDesc={`Pecinta Kucing Hungaria`}
              className={`bg-white p-8 w-[369px] h-fit`}
              display={`hidden`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
