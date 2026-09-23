import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderImport.default ?? SliderImport;

import Image11 from "../../assets/image11.jpg";
import Image22 from "../../assets/image22.jpg";
import Image33 from "../../assets/image33.jpg";
import Image44 from "../../assets/image44.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: Image11,
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: Image22,
  },
  {
    id: 3,
    name: "Dipankar kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: Image33,
  },
  {
    id: 4,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: Image44,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">

      <div className="container">

        {/* Header Section */}
        <div
          className="text-center mb-20"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>

        {/* Testimonials Cards Section */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Slider {...settings}>
            {TestimonialData.map((data, index) => {
              return (
                <div
                  className="my-6"
                  key={data.id}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={200 + index * 100}
                  data-aos-once="true"
                >
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">

                    {/* Image */}
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="rounded-full w-20 h-20 object-cover"
                      />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-500">
                      {data.text}
                    </p>

                    {/* Name */}
                    <h3 className="font-bold font-cursive text-xl text-gray-800">
                      {data.name}
                    </h3>

                    {/* Quote */}
                    <p className="text-6xl text-gray-300 absolute right-6 top-5">
                      ”
                    </p>

                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;