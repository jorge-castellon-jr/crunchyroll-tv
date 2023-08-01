"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Carousel.scss";

import { useAtom } from "jotai";
import { carouselIndexAtom } from "@/store/CarouselStore";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CarouselBgImage from "./CarouselBgImage";

type CarouselProps = {
  // children: React.ReactNode;
  items: CarouselItem[];
};

export type CarouselItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  headline: string;
};

const Carousel = ({ items }: CarouselProps) => {
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

  const saveToList = (item: CarouselItem) => {
    alert(`Saving item`);
  };

  return (
    <div className="flex flex-col">
      <CarouselBgImage />
      <div className="carousel__container ">
        {items &&
          items.map((item, index) => (
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
              <div className="h-[7vw] flex items-center">
                {item.description}
              </div>
              <div className="text-[2vw] font-bold">{item.headline}</div>
            </div>
          ))}
      </div>
      {items.length && (
        <div className="flex gap-[2vw] relative z-10">
          <Link
            href={`/anime/player/${items[currentIndex].id}`}
            className="orange_gradient__fill rounded-full h-[4vw] w-[4vw] flex items-center justify-center text-slate-900"
            style={{ fontSize: "3vw" }}
          >
            <PlayArrowIcon fontSize="inherit" />
          </Link>
          <Link
            href={`/anime/${items[currentIndex].id}`}
            className="border-white border rounded-full flex items-center px-[2vw] gap-[.5vw] uppercase"
          >
            <InfoIcon style={{ fontSize: "2vw" }} fontSize="inherit" />
            <span className="mt-[.25vw]">More Info</span>
          </Link>
          <div
            className="border-white border rounded-full flex items-center px-[2vw] gap-[.5vw] uppercase"
            onClick={() => saveToList(items[currentIndex])}
          >
            <PlaylistAddIcon style={{ fontSize: "2vw" }} fontSize="inherit" />
            <span className="mt-[.25vw]">Save to List</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
