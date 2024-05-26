const SectionIntro = ({ title, subTitle, titleWhite }) => {
  return (
    <div className="w-full px-5 mx-auto text-center md:max-w-md md:px-0">
      <p className="text-lg italic font-normal lg:text-xl text-primary">
        ---{subTitle}---
      </p>
      <h3
        className={` ${
          titleWhite ? "text-white" : "text-title"
        } py-4 lg:py-6 text-2xl md:text-3xl lg:text-4xl font-normal border-y-4 font-inter border-[#E8E8E8] mt-2 lg:mt-3`}
      >
        {title}
      </h3>
    </div>
  );
};

export default SectionIntro;
