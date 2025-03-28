'use client';
export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0c0c0c',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
    }}>

      {/* Logo + šūkis */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 0',
      }}>
        <img 
          src="/stakesheep-logo.png" 
          alt="StakeSheep Logo" 
          style={{
            height: '120px',
            marginBottom: '20px',
          }}
        />
        <h1 style={{
          fontSize: '36px',
          color: '#d4af37',
          textAlign: 'center',
          margin: 0,
        }}>
          Stake. Climb. Dominate.
        </h1>
      </div>

      {/* Esamas šūkis */}
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        StakeSheep Mirror is coming soon...
      </h1>

      {/* Join Now mygtukas */}
      <a
        href="https://www.goated.com/r/STAKESHEEP"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: '2rem',
          padding: '12px 24px',
          backgroundColor: '#ffd700',
          color: 'black',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Join Now
      </a>
    </main>
  );
}
