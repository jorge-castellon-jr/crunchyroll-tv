"use client";
import React, { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail";
import { CarouselItem } from "../Carousel";
import { AnimeEpisode } from "@/lib/database";

const ContinueWatching = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch("/api/anime/continue-watching");
      const data = await response.json();
      setShows(data);
    };
    fetchShows();
  }, []);

  return (
    <div className="flex gap-[2vw] overflow-x-scroll w-[100vw] mx-[-4vw] px-[4vw]">
      {shows.map((show: AnimeEpisode) => (
        <Thumbnail key={show.id} show={show} />
      ))}
    </div>
  );
};

export default ContinueWatching;
