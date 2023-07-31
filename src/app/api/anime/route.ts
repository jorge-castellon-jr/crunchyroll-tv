import { CarouselItem } from "@/components/Carousel";
import { faker } from "@faker-js/faker";
import { log } from "console";
import { title } from "process";

export const GET = (request: Request) => {
  const data: CarouselItem[] = [...Array(10)].map((): CarouselItem => {
    const title = faker.music.songName();
    const randomTagCount = Math.ceil(Math.random() * 3) + 1;
    return {
      id: title.replace(/\s/g, "-").toLowerCase(),
      title,
      description: faker.lorem.sentence(),
      image: faker.image.urlLoremFlickr({
        category: "business-logo",
        width: 1000,
      }),
      headline: faker.lorem.words({ min: 1, max: 5 }) + "!",
      tags: [...Array(randomTagCount)].map(() =>
        faker.lorem.words({ min: 1, max: 2 })
      ),
    };
  });
  return new Response(JSON.stringify(data), {
    status: 200,
  });
};
