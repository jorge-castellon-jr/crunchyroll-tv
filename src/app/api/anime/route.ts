import { CarouselSlide } from "@/components/carousel/Carousel";
import { getFakerShows } from "@/lib/database";

export const GET = async (request: Request) => {
  const data: CarouselSlide[] = await getFakerShows(5);
  return new Response(JSON.stringify(data), {
    status: 200,
  });
};
