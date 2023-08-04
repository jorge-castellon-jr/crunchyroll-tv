"use client";
import React, { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail";
import { AnimeEpisode } from "@/lib/database";
import { useContinueWatching } from "./useContinueWatching";

const ContinueWatching = () => {
  const { shows } = useContinueWatching();

  return (
    <div className="flex gap-[2vw] overflow-x-scroll w-[100vw] mx-[-4vw] px-[4vw]">
      {shows.map((show: AnimeEpisode) => (
        <Thumbnail key={show.id} show={show} />
      ))}
    </div>
  );
};

export default ContinueWatching;
