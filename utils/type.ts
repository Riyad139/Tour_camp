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
