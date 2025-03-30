'use client';

export default function Hero() {
  return (
    <div style={{
      textAlign: 'center',
      marginBottom: '3rem',
    }}>
      <img
        src="/logo.png"
        alt="StakeSheep Logo"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '20px',
          boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
          marginBottom: '2rem',
        }}
      />
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textShadow: '0 0 15px rgba(255, 215, 0, 0.5)',
      }}>
        Stake. Climb. Dominate.
      </h1>
      <h2 style={{ fontSize: '2rem', marginTop: '1rem' }}>
        StakeSheep Mirror is coming soon...
      </h2>
    </div>
  );
}
