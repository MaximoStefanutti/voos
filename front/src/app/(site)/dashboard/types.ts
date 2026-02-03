export interface ServiceProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
