import { AnimeEpisode } from "@/lib/database";
import { useEffect, useState } from "react";

export const useContinueWatching = (): { shows: AnimeEpisode[] } => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch("/api/anime/continue-watching");
      const data = await response.json();
      setShows(data);
    };
    fetchShows();
  }, []);

  return { shows };
};
