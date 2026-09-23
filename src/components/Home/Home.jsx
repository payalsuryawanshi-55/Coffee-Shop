import HeroImg from "../../assets/coffee2.png";

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">

          {/* Text Content Section */}
          <div className="order-2 sm:order-1 flex flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              We serve the richest{" "}
              <span className="text-secondary font-cursive">
                Coffee
              </span>{" "}
              in the city
            </h1>

            <div className="mt-5">
              <button className="bg-gradient-to-r from-secondary to-secondary/90 border-2 border-secondary rounded-full px-4 py-2 text-white hover:scale-105 duration-200">
                Coffee And Code
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">

            <img
              src={HeroImg}
              alt="Coffee"
              className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
            />

            {/* Hey Coder */}
            <div className="bg-gradient-to-r from-secondary to-secondary/90 absolute top-10 left-1/2 -translate-x-1/2 p-3 rounded-xl">
              <h1>Hey Coder</h1>
            </div>

            {/* Best Coffee */}
            <div className="bg-gradient-to-r from-secondary to-secondary/90 absolute bottom-10 right-0 p-3 rounded-xl">
              <h1>Best Coffee</h1>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;