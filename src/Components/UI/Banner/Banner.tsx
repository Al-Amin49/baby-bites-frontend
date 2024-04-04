import Image from "next/image";
import { bannerData } from "../../Utils/data";

const Banner = () => {
  
  return (
    <div className="carousel w-full relative ">
      {bannerData.map((slide, index) => (
        <div
          key={`slide-${index}`}
          id={`slide-${index + 1}`}
          className="carousel-item relative w-full"
        >
          <Image
            src={slide.image}
            className="w-full"
            alt=""
            width={800}
            height={600}
          />
          <div
            className="absolute inset-0 flex flex-col justify-center  text-white text-center bg-primary w-[60%]  lg:w-[35%] h-[65%] lg:h-[48%]  mx-auto top-[52%] sm:p-10 lg:p-1"
            style={{
              clipPath:
                "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
            }}
          >
            <h2 className="text-xl lg:text-4xl font-bold  mb-5">{slide.title}</h2>
            <p className="text-sm lg:text-xl  text-secondary font-bold  ">
              {slide.description}
            </p>
            <button className="btn btn-secondary w-[50%] mx-auto font-bold mt-5 ">Order Now</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide-${index === 0 ? bannerData.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide-${index === bannerData.length - 1 ? 0 : index + 2}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
