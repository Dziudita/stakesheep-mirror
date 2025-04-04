'use client';

import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#FFD700',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      <Hero />
      <Stats />
      <About />
    </main>
  );
}
