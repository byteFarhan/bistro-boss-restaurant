import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-col md:flex-row">
          <div className="bg-[#1F2937] py-16 md:py-20 lg:py-24 flex-grow text-center">
            <h3 className="mb-6 text-2xl font-medium leading-normal text-white lg:text-3xl">
              CONTACT US
            </h3>
            <p className="mt-2 text-white">
              123 ABS Street, Uni 21, Bangladesh
            </p>
            <p className="mt-2 text-white">+88 123456789</p>
            <p className="mt-2 text-white">Mon - Fri: 08:00 - 22:00</p>
            <p className="mt-2 text-white">Sat - Sun: 10:00 - 23:00</p>
          </div>
          <div className="bg-[#111827] py-16 md:py-20 lg:py-24 flex-grow text-center space-y-6">
            <h3 className="text-2xl font-medium leading-normal text-white lg:text-3xl">
              Follow US
            </h3>
            <p className="text-white">Join us on social media</p>
            <div className="flex justify-center gap-5 lg:gap-8 text-2xl md:text-3xl lg:text-4xl [&>*]:cursor-pointer text-white">
              <p>
                <FaFacebookF />
              </p>
              <p>
                <FaInstagram />
              </p>
              <p>
                <FaXTwitter />
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 bg-[#151515]">
          <p className="font-normal text-center text-white lg:text-lg">
            Copyright © CulinaryCloud. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
