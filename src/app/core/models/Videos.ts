export class Videos {
  id: number;
  title: string;
  idVideo: string;
  channelId: string;
  channelTitle: string;
  description: string;
  thumbnail: Thumbnail;
  tags: any;
  items: any;
  user: User;
  categories: Categories;
}
class Thumbnail {
  default: ThumbType;
  high: ThumbType;
  maxres: ThumbType;
  medium: ThumbType;
  standard: ThumbType;
}
class ThumbType {
  height: number;
  width: number;
  url: string;
}
class Categories {
  id: number;
  name: string;
  slug: string;
}
