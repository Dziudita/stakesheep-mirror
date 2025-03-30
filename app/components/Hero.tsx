'use client';

export default function Hero() {
  return (
    <div style={{
      textAlign: 'center',
      paddingTop: '2rem',
      paddingBottom: '1rem',
    }}>
      <img
        src="/logo.png"
        alt="StakeSheep Logo"
        style={{
          width: '160px',
          height: 'auto',
          marginBottom: '1.5rem',
          boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)',
          borderRadius: '20px',
        }}
      />
      <h2 style={{
        fontSize: '2.5rem',
        color: '#FFD700',
        textShadow: '0 0 12px #FFD700',
        marginBottom: '1rem',
      }}>
        Stake. Climb. Dominate.
      </h2>
      <h1 style={{
        fontSize: '2rem',
        color: '#fff',
      }}>
        StakeSheep Mirror is coming soon...
      </h1>
      <a
        href="https://www.goated.com/r/STAKESHEEP"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          padding: '12px 24px',
          backgroundColor: '#000',
          color: '#FFD700',
          border: '2px solid #FFD700',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FFD700')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#000')}
      >
        Join Now
      </a>
    </div>
  );
}
