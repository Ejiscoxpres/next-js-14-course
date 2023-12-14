import homeImg from 'next/image.jpg';
import Hero from '@/components/hero';

export default function HomePage() {
  return (
   
  
 <Hero 
 imgData={homeImg} 
 imgAlt='car factory'
 title='Professinal Cloud Hosting'
 
  />
  )
  
}
