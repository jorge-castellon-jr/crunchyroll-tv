"use client";
import React, { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail";
import { CarouselItem } from "../Carousel";

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
    <div className="flex gap-[2vw] w-[100vw]">
      {shows.map((show: CarouselItem) => (
        <Thumbnail key={show.id} show={show} />
      ))}
    </div>
  );
};

export default ContinueWatching;
