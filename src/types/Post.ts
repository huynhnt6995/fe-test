export default interface Post {
  id: string;

  title: string;

  thumbnail: string;

  tags: string[];

  createdAt: string; // iso date;

  url: string;
}