export interface IBlogPost {
  id: string;
  cover: string;
  title: string;
  createdAt: Date;
  view: number;
  comment: number;
  share: number;
  favorite: number;
  author: IBlogPostAuthor;
}

export interface IBlogPostAuthor {
  name: string;
  avatarUrl: string;
}

export interface IBlogPostsSortOption {
  value: string;
  label: string;
}
