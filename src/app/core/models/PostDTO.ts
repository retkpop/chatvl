import DateTimeFormat = Intl.DateTimeFormat;

class PostDTO {
  id: number;
  title: string;
  channelId: string;
  channelTitle: string;
  description: string;
  thumbnail: string;
  slug: string;
  user: User;
  createdDate: DateTimeFormat;
  lastUpdate: DateTimeFormat;
  views: number;
  type: number;
  hashtags: Array<Hashtag>;
  tags: any;
}
class User {
  id: number;
  lastName: string;
  firstName: string;
  imageUrl: string;
}
class Hashtag {
  id: number;
  name: string;
  slug: string;
}
