'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Hero() {
  return (
    <div style={{
      textAlign: 'center',
      paddingTop: '3rem',
      paddingBottom: '3rem',
      color: '#FFD700',
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
        textShadow: '0 0 15px rgba(255, 215, 0, 0.6)',
        marginBottom: '1rem',
      }}>
        Stake. Climb. Dominate.
      </h2>

      <h1 style={{
        fontSize: '2rem',
        color: '#fff',
        marginBottom: '2rem',
      }}>
        StakeSheep Mirror is coming soon...
      </h1>

      <div style={{ marginTop: '2rem' }}>
        <ConnectButton />
      </div>
    </div>
  );
}
