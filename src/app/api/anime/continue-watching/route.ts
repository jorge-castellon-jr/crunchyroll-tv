import { CarouselItem } from "@/components/Carousel";
import { getFakerContinueWatching } from "@/lib/database";

export const GET = async (request: Request) => {
  const data: CarouselItem[] = await getFakerContinueWatching(5);
  return new Response(JSON.stringify(data), {
    status: 200,
  });
};
