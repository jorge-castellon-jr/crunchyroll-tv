"use client";
import "./Carousel.scss";

import { useCarousel } from "./useCarousel";
import CarouselBgImage from "./CarouselBgImage";
import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControls";

type CarouselProps = {
  // children: React.ReactNode;
  items: CarouselSlide[];
};

export type CarouselSlide = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  headline: string;
};

const Carousel = ({ items }: CarouselProps) => {
  const { currentIndex } = useCarousel(items);

  const saveToList = (item: CarouselSlide) => {
    alert(`Saving item`);
  };

  return (
    <div className="flex flex-col">
      <CarouselBgImage />
      <div className="carousel__container ">
        {items &&
          items.map((item, index) => (
            <CarouselItem
              key={`carousel-item-${index}`}
              item={item}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
      </div>
      {items.length && (
        <CarouselControls
          items={items}
          currentIndex={currentIndex}
          saveToList={saveToList}
        />
      )}
    </div>
  );
};

export default Carousel;
