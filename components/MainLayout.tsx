import React from 'react'
import Hero, { CarouselItem } from './Hero'

const MainLayout = () => {
  const carouselItems: CarouselItem[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Luxury Sports Car',
    description: 'Experience the thrill of high-performance driving with our latest sports model.'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Family SUV',
    description: 'Spacious and comfortable, perfect for family adventures and daily commutes.'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Electric Vehicle',
    description: 'Eco-friendly and efficient, the future of transportation is here.'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Classic Convertible',
    description: 'Timeless style meets modern performance in this beautiful convertible.'
  }
];
  return (
    <div>
      <Hero  items={carouselItems}
          autoPlay={true}
          interval={4000}></Hero>
    </div>
  )
}

export default MainLayout
