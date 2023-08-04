import Link from "next/link";
import React from "react";
import { CarouselSlide } from "./Carousel";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

type CarouselControlsProps = {
  items: CarouselSlide[];
  currentIndex: number;
  saveToList: (item: CarouselSlide) => void;
};

const CarouselControls = ({
  items,
  currentIndex,
  saveToList,
}: CarouselControlsProps) => {
  return (
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
  );
};

export default CarouselControls;
