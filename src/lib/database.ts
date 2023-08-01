import { CarouselItem } from "@/components/Carousel";
import { faker } from "@faker-js/faker";

export const getFakerShows = (count = 1) => {
  return [...Array(count)].map((): CarouselItem => {
    const title = faker.music.songName();
    const randomTagCount = Math.ceil(Math.random() * 3) + 1;
    return {
      id: title.replace(/\s/g, "-").toLowerCase(),
      title,
      description: faker.lorem.sentence(),
      image: faker.image.urlLoremFlickr({
        category: "anime",
        width: 1000,
      }),
      headline: faker.lorem.words({ min: 1, max: 5 }) + "!",
      tags: [...Array(randomTagCount)].map(() =>
        faker.lorem.words({ min: 1, max: 2 })
      ),
    };
  });
};

export type AnimeEpisode = {
  id: string;
  title: string;
  description: string;
  image: string;
  season: number;
  episode: number;
  episode_title: string;
  resume: number;
};
export const getFakerContinueWatching = (count = 1) => {
  return [...Array(count)].map((): AnimeEpisode => {
    const title = faker.music.songName();
    return {
      id: title.replace(/\s/g, "-").toLowerCase(),
      title,
      description: faker.lorem.sentence(),
      image: faker.image.urlLoremFlickr({
        category: "anime",
        width: 800,
        height: 500,
      }),
      season: Math.ceil(Math.random() * 4),
      episode: Math.ceil(Math.random() * 24),
      episode_title: faker.lorem.words({ min: 1, max: 8 }),
      resume: Math.ceil(Math.random() * 99),
    };
  });
};
