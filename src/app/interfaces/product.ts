export interface Product {
  title: string;
  slug: string;
  category: string;
  sub_category: string;
  description: string;
  timestamp: string;
  image: {
    img1: string;
    img2?: string;
    img3?: string;
  };
}
