import React from "react";
import Image from "next/image";
import { AnimeEpisode } from "@/lib/database";
import { AspectRatio } from "../ui/aspect-ratio";
import { Progress } from "../ui/progress";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import "./Thumbnail.scss";

type ThumbnailProps = {
  show: AnimeEpisode;
};

const Thumbnail = ({ show }: ThumbnailProps) => {
  return (
    <div className="continue-watching__container ">
      <AspectRatio ratio={16 / 9} className="continue-watching__video">
        <Image
          className="object-cover"
          alt={show.title}
          src={show.image}
          width={444}
          height={250}
        />
        <div className="continue-watching__play">
          <div>
            <PlayArrowIcon />
          </div>
        </div>
        <div className="continue-watching__progress__wrapper absolute bottom-0 orange_gradient w-full px-[.5vw] pb-0">
          <div className="continue-watching__progress__text">
            {show.min_left} min left
          </div>
          <Progress
            value={show.resume_percent}
            className="continue-watching__progress "
          />
        </div>
      </AspectRatio>
      <div className="continue-watching__title__anime">{show.title}</div>
      <div className="continue-watching__title__episode">
        S{show.season} E{show.episode} &#x2022; {show.episode_title}
      </div>
    </div>
  );
};

export default Thumbnail;
