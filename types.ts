
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
  tags: string[];
}

export enum Page {
  Works = 'works',
  About = 'about',
  Contact = 'contact'
}
