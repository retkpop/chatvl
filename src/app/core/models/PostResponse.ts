export class PostResponse {
  id: number;
  title: string;
  slug: string;
  idVideo: string;
  channelId: string;
  channelTitle: string;
  description: string;
  thumbnail: string;
  createdDate: string;
  items: any;
  user: User;
  hashtags: Array<Hashtag>;
  categories: Categories;
}
class Categories {
  id: number;
  name: string;
  slug: string;
}
