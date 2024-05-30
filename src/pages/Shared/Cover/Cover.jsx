import { Parallax } from "react-parallax";

const Cover = ({ bgImg, children, effect }) => {
  return (
    <div>
      <Parallax
        blur={effect && { min: -30, max: 30 }}
        bgImage={bgImg}
        bgImageAlt=""
        strength={effect ? -200 : 0}
        className="bg-center bg-cover"
      >
        {/* Blur transition from min to max
        <div style={{ height: "200px" }} /> */}
        <div className="flex items-center justify-center px-8 py-16 md:py-20 md:px-12 lg:p-28">
          {children}
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
