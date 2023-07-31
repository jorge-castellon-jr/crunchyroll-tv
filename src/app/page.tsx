"use client";

import React, { useEffect, useState } from "react";
import Carousel, { CarouselItem } from "@/components/Carousel";
export default function Home() {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchCarouselItems = async () => {
      const response = await fetch("/api/anime");
      const data = await response.json();
      setCarouselItems(data);
    };
    fetchCarouselItems();
  }, []);

  return (
    <main className="flex w-full h-full">
      <Carousel items={carouselItems}></Carousel>
    </main>
  );
}
