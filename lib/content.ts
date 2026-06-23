import type {
  CityPin,
  ClientLogo,
  ClientStory,
  HeroPhoto,
  MiniTimelineEvent,
  OperatingFormat,
  OperatingSystemCard,
  StoryContent,
  Testimonial,
  TimelineEvent,
} from "@/lib/types";

import benefitsData from "@/content/benefits.json";
import storyData from "@/content/story.json";
import operatingSystemData from "@/content/operating-system.json";
import clientsData from "@/content/clients.json";
import clientStoriesData from "@/content/client-stories.json";
import testimonialsData from "@/content/testimonials.json";
import timelineData from "@/content/timeline.json";
import miniTimelineData from "@/content/mini-timeline.json";
import citiesData from "@/content/cities.json";
import operatingFormatsData from "@/content/operating-formats.json";
import heroPhotosData from "@/content/hero-photos.json";

export const benefits: string[] = benefitsData.items;
export const storyContent: StoryContent = storyData as StoryContent;
export const operatingSystemCards: OperatingSystemCard[] =
  operatingSystemData.cards as OperatingSystemCard[];
export const clients: ClientLogo[] = clientsData.clients;
export const clientStories: ClientStory[] = clientStoriesData.stories as ClientStory[];
export const testimonials: Testimonial[] = testimonialsData.testimonials;
export const timeline: TimelineEvent[] = timelineData.events;
export const miniTimeline: MiniTimelineEvent[] = miniTimelineData.events;
export const cities: CityPin[] = citiesData.cities as CityPin[];
export const operatingFormats: OperatingFormat[] =
  operatingFormatsData.formats as OperatingFormat[];
export const heroPhotos: HeroPhoto[] = heroPhotosData.photos as HeroPhoto[];
