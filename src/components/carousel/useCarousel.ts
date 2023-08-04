import { carouselIndexAtom } from "@/store/CarouselStore";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { CarouselSlide } from "./Carousel";

export const useCarousel = (items: CarouselSlide[]) => {
  const [currentIndex, setCurrentIndex] = useAtom(carouselIndexAtom);
  const carouselInfiniteScroll = () => {
    if (currentIndex >= items.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 10000);
    return () => clearInterval(interval);
  });

  return { currentIndex };
};
