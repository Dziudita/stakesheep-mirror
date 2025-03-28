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
          fontSize: '2rem',
          color: '#FFD700',
          marginBottom: '1rem',
          textShadow: '0 0 10px rgba(255, 215, 0, 0.6)',
        }}
      >
        Stake. Climb. Dominate.
      </h2>

      <h1
        style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#fff',
        }}
      >
        StakeSheep Mirror is coming soon...
      </h1>

      <a
        href="https://www.goated.com/r/STAKESHEEP"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: '2rem',
          padding: '12px 24px',
          backgroundColor: '#000',
          color: '#FFD700',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
          cursor: 'pointer',
          boxShadow: '0 0 15px rgba(255, 215, 0, 0.4)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.4)';
        }}
      >
        Join Now
      </a>
    </main>
  );
}
