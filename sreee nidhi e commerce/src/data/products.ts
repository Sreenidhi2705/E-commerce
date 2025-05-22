export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    image: "https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electronics",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.",
    rating: 4.7
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electronics",
    description: "Fitness tracker with heart rate monitoring, GPS, and notification support. Water resistant up to 50m.",
    rating: 4.5
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: 89.99,
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "fashion",
    description: "Comfortable everyday sneakers with breathable fabric and cushioned insoles.",
    rating: 4.3
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 79.99,
    image: "https://images.pexels.com/photos/4350063/pexels-photo-4350063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "home",
    description: "Programmable coffee maker with 12-cup capacity and auto shut-off feature.",
    rating: 4.2
  },
  {
    id: 5,
    name: "Backpack",
    price: 59.99,
    image: "https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "fashion",
    description: "Durable backpack with laptop compartment, water bottle pockets, and adjustable straps.",
    rating: 4.6
  },
  {
    id: 6,
    name: "Smartphone",
    price: 799.99,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electronics",
    description: "Latest smartphone with high-resolution camera, all-day battery life, and 5G connectivity.",
    rating: 4.8
  },
  {
    id: 7,
    name: "Desk Lamp",
    price: 45.99,
    image: "https://images.pexels.com/photos/3637741/pexels-photo-3637741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "home",
    description: "LED desk lamp with adjustable brightness, color temperature, and flexible arm.",
    rating: 4.4
  },
  {
    id: 8,
    name: "Water Bottle",
    price: 24.99,
    image: "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "fitness",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    rating: 4.5
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'home', name: 'Home' },
  { id: 'fitness', name: 'Fitness' }
];