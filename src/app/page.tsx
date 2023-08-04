"use client";
import Carousel from "@/components/carousel/Carousel";
import ContinueWatching from "@/components/anime/ContinueWatching";
import { useRootPage } from "./useRootPage";

export default function Home() {
  const { carouselItems } = useRootPage();

  return (
    <main className="flex w-full h-full flex-col">
      <Carousel items={carouselItems}></Carousel>
      <div>Continue Watching</div>
      <ContinueWatching />
    </main>
  );
}
