import BannerImg from "../../assets/coffee-white.png";
import BgTexture from "../../assets/coffee-texture.jpg";

import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <div id="about" className="scroll-mt-24" style={bgImage}>
      <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* ================= IMAGE SECTION ================= */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <img
              src={BannerImg}
              alt="Premium Coffee"
              className="max-w-[430px] w-full mx-auto spin drop-shadow-xl"
            />
          </div>

          {/* ================= TEXT SECTION ================= */}
          <div
            className="flex flex-col justify-center gap-6 sm:pt-0"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >

            {/* Heading */}
            <h1
              className="text-3xl sm:text-4xl font-bold font-cursive"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              Premium Blend Coffee
            </h1>

            {/* Description */}
            <p
              className="text-sm text-gray-500 tracking-wide leading-5"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-once="true"
            >
              Enjoy the rich aroma and delicious taste of our premium
              coffee blends, crafted specially for every coffee lover.
            </p>

            {/* ================= FEATURES + TEA LOVER ================= */}
            <div className="grid grid-cols-2 gap-6">

              {/* Features */}
              <div
                className="space-y-5"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
                data-aos-once="true"
              >

                {/* Premium Coffee */}
                <div className="flex items-center gap-3">
                  <GrSecure
                    className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100"
                  />

                  <span>Premium Coffee</span>
                </div>

                {/* Hot Coffee */}
                <div className="flex items-center gap-3">
                  <IoFastFood
                    className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100"
                  />

                  <span>Hot Coffee</span>
                </div>

                {/* Cold Coffee */}
                <div className="flex items-center gap-3">
                  <GiFoodTruck
                    className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100"
                  />

                  <span>Cold Coffee</span>
                </div>

              </div>

              {/* Tea Lover */}
              <div
                className="border-l-4 border-primary/50 pl-6 space-y-3"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="700"
                data-aos-once="true"
              >

                <h1 className="text-2xl font-semibold font-cursive">
                  Tea Lover
                </h1>

                <p className="text-gray-500 text-sm">
                  Much like writing code, brewing the perfect cup of tea
                  requires patience, precision, and a dash of passion to
                  create a comforting blend of flavors.
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;