import { CarouselSlide } from "@/components/carousel/Carousel";
import { useState, useEffect } from "react";

export const useRootPage = (): { carouselItems: CarouselSlide[] } => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchCarouselItems = async () => {
      const response = await fetch("/api/anime");
      const data = await response.json();
      setCarouselItems(data);
    };
    fetchCarouselItems();
  }, []);
  return { carouselItems };
};
