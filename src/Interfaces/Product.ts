export interface Product {
  product_name: string;
  product_description: string;
  product_image: string;
  product_image_alt: string;
  product_category: string;
  product_value: number;
  product_addons: Addon[];
}

interface Addon {
  addon_name: string;
  addon_description: string;
  addon_image: string;
  addon_image_alt: string;
  addon_value: number;
  addon_weight: string;
}
