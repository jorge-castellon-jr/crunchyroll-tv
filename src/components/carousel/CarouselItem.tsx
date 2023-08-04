import React from "react";
import Image from "next/image";
import { CarouselSlide } from "./Carousel";

type CarouselItemProps = {
  item: CarouselSlide;
  index: number;
  currentIndex: number;
};

const CarouselItem = ({ item, index, currentIndex }: CarouselItemProps) => {
  return (
    <div
      className={
        "carousel__item " +
        (index === currentIndex ? "opacity-100" : "opacity-0")
      }
      key={`carousel-item-${index}`}
    >
      <div className="w-[45vw] ">
        <Image
          className=" h-full object-contain object-center "
          src={item.image}
          alt={item.title}
          width={250}
          height={500}
        />
      </div>
      <div className="flex gap-[.5vw]">
        {item.tags &&
          item.tags.map((tag, index) => (
            <span
              key={`carousel-item-tag-${index}`}
              className="bg-slate-700 rounded-sm px-[.5vw] py-[.25vw] text-[1vw]"
            >
              {tag}
            </span>
          ))}
      </div>
      <div className="h-[7vw] flex items-center">{item.description}</div>
      <div className="text-[2vw] font-bold">{item.headline}</div>
    </div>
  );
};

export default CarouselItem;
