import { CarouselItem } from "@/components/carousel/Carousel";
import { faker } from "@faker-js/faker";

export const getFakerShows = (count = 1) => {
  if (count < 8) count = 8;
  return [...Array(count)].map((_, index): CarouselItem => {
    const title = faker.music.songName();
    const randomTagCount = Math.ceil(Math.random() * 3) + 1;
    return {
      id: title.replace(/\s/g, "-").toLowerCase(),
      title,
      description: faker.lorem.sentence(),
      image: `/assets/anime/anime-${index + 1}/logo.png`,
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
  resume_percent: number;
  min_left: number;
};
export const getFakerContinueWatching = (count = 1) => {
  return [...Array(count)].map((_, index): AnimeEpisode => {
    const title = faker.music.songName();
    const show_percent = Math.ceil(Math.random() * 99);
    const max_length = Math.ceil(Math.random() * 6) + 22;
    const min_left = max_length - Math.round((show_percent / 100) * max_length);
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
      min_left,
      resume_percent: show_percent,
    };
  });
};
