import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import FooterBg from "../../assets/coffee-footer.jpg";

const FooterLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Contact",
    link: "#contact",
  },
  {
    title: "Blog",
    link: "#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container">

          <div className="grid md:grid-cols-4 gap-10 pb-20 pt-16">

            {/* Company Details */}
            <div>
              <a
                href="#"
                className="font-semibold tracking-wider text-3xl sm:text-4xl font-cursive"
              >
                Coffee Cafe
              </a>

              <p className="pt-4 text-base leading-7 max-w-md">
                Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your
                Perfect Espresso Escape
              </p>
            </div>

            {/* Footer Links */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Footer Links
              </h2>

              <ul className="space-y-5">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-lg hover:text-gray-300 transition duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Quick Links
              </h2>

              <ul className="space-y-5">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-lg hover:text-gray-300 transition duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Address
              </h2>

              <p className="text-lg mb-5">
                Noida, India
              </p>

              <p className="text-lg mb-8">
                +91 1234567890
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-5">
                <a
                  href="#"
                  className="text-3xl hover:scale-110 transition duration-300"
                >
                  <FaFacebook />
                </a>

                <a
                  href="#"
                  className="text-3xl hover:scale-110 transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  className="text-3xl hover:scale-110 transition duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;