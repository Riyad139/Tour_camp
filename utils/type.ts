export interface InfoType {
  id: string;
  headline: string;
  descriptions: string;
  button?: {
    label: string;
    slug: string;
    color: string;
  };
  showImageRight: boolean;
  image: string;
}

export interface EventType {
  id: string;
  headline: string;
  cover: string;
  descriptions: string;
  packages: { id: string; couple: number; single: number; group: number };
}
