"use client";

import React, { useEffect, useState } from "react";
import Carousel, { CarouselItem } from "@/components/carousel/Carousel";
import ContinueWatching from "@/components/anime/ContinueWatching";
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
    <main className="flex w-full h-full flex-col">
      <Carousel items={carouselItems}></Carousel>
      <div>Continue Watching</div>
      <ContinueWatching />
    </main>
  );
}
