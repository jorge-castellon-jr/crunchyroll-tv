import { CarouselItem } from "@/components/carousel/Carousel";
import { getFakerShows } from "@/lib/database";

export const GET = async (request: Request) => {
  const data: CarouselItem[] = await getFakerShows(5);
  return new Response(JSON.stringify(data), {
    status: 200,
  });
};
