import { CarouselItem } from "@/components/Carousel";
import { AnimeEpisode, getFakerContinueWatching } from "@/lib/database";

export const GET = async (request: Request) => {
  const data: AnimeEpisode[] = await getFakerContinueWatching(5);
  return new Response(JSON.stringify(data), {
    status: 200,
  });
};
