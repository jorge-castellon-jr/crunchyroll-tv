import React from "react";
import Image from "next/image";
import { AnimeEpisode } from "@/lib/database";

type ThumbnailProps = {
  show: AnimeEpisode;
};

const Thumbnail = ({ show }: ThumbnailProps) => {
  return (
    <div className="flex flex-col">
      <Image
        className="object-cover"
        alt={show.title}
        src={show.image}
        width={444}
        height={250}
      />
      <div>{show.title}</div>
      <div>
        S{show.season} E{show.episode} &#x2022; {show.episode_title}
      </div>
    </div>
  );
};

export default Thumbnail;
