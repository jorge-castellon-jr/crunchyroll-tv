import { carouselIndexAtom } from "@/store/CarouselStore";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";

const CarouselBgImage = () => {
  const [currentIndex] = useAtom(carouselIndexAtom);
  return (
    <div className="carousel__bg">
      <Image
        className={"w-full h-full object-cover object-center "}
        alt="carousel-bg"
        src={`/assets/anime/anime-${currentIndex + 1}/bg.jpg`}
        width={1000}
        height={800}
      />
    </div>
  );
};

export default CarouselBgImage;
