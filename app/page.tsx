'use client';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #0c0c0c, #1a1a1a)',
        color: '#FFD700', // gold
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <img
        src="/logo.png"
        alt="StakeSheep Logo"
        style={{
          width: '150px',
          height: 'auto',
          marginBottom: '2rem',
          borderRadius: '0.8rem',
          boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)',
        }}
      />

      <h2
        style={{
          fontSize: '
