class SuggestionsDTO {
  id: number;
  name: string;
  slug: string;
  description: string;
  type: string;
  sort: string;
  status: string;
  created_date: number;
  last_update: any;
  user: Users;
  posts: PostDTO;
}
