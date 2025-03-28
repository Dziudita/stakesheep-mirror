'use client';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#FFD700', // auksinė
      color: '#000000',            // juoda
      fontFamily: 'Arial, sans-serif',
    }}>
      <img
        src="/logo.png"
        alt="StakeSheep Logo"
        style={{
          width: '150px',
          height: 'auto',
          marginBottom: '2rem',
          borderRadius: '0.8rem',
          boxShadow: '0 0 20px rgba(245, 215, 0, 0.4)',
        }}
      />

      <h2 style={{
        fontSize: '2rem',
        color: '#000000',
        marginBottom: '1rem',
      }}>
        Stake. Climb. Dominate.
      </h2>

      <h1 style={{
        fontSize: '2rem',
        marginBottom: '1rem',
      }}>
        StakeSheep Mirror is coming soon...
      </h1>

      <a
        href="https://www.goated.com/r/STAKESHEEP"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: '2rem',
          padding: '12px 24px',
          backgroundColor: '#000000',
          color: '#FFD700',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Join Now
      </a>
    </main>
  );
}
