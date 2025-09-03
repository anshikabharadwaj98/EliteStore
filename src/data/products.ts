import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.5,
    description: 'High-quality wireless headphones with noise cancellation and long battery life.',
    stock: 25
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    rating: 4.2,
    description: 'Comfortable and sustainable organic cotton t-shirt in various colors.',
    stock: 50
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    price: 199.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.7,
    description: 'Advanced fitness tracking with heart rate monitor and GPS.',
    stock: 15
  },
  {
    id: '4',
    name: 'Artisan Coffee Beans',
    price: 24.99,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Food',
    rating: 4.8,
    description: 'Premium single-origin coffee beans roasted to perfection.',
    stock: 40
  },
  {
    id: '5',
    name: 'Leather Crossbody Bag',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    rating: 4.3,
    description: 'Elegant leather bag perfect for everyday use.',
    stock: 20
  },
  {
    id: '6',
    name: 'Natural Skincare Set',
    price: 49.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Beauty',
    rating: 4.6,
    description: 'Complete skincare routine with natural ingredients.',
    stock: 30
  }
];