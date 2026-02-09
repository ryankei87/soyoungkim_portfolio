
export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  partner: string;
  contribution: string;
  description: string;
  conceptText?: string;
  image: string;
  color: string;
  tags: string[];
  secondaryImages?: string[];
}

export enum Page {
  Works = 'works',
  About = 'about',
  Contact = 'contact',
  ProjectDetail = 'project-detail'
}
