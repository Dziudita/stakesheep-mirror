'use client';

import Hero from './components/Hero';
import Stats from './components/Stats';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#FFD700',
      fontFamily: 'Arial, sans-serif',
    }}>
      <Hero />
      <Stats />
    </main>
  );
}
