'use client';

export default function About() {
  return (
    <section style={{
      background: '#111111',
      color: '#FFD700',
      padding: '3rem 2rem',
      borderRadius: '12px',
      marginTop: '3rem',
      maxWidth: '800px',
      textAlign: 'center',
      boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)',
    }}>
      <h2 style={{
        fontSize: '2rem',
        marginBottom: '1.5rem',
        textShadow: '0 0 10px rgba(255, 215, 0, 0.6)',
      }}>
        🐏 About StakeSheep
      </h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        <strong>StakeSheep</strong> is more than just staking – it's a movement. <br /><br />
        Track your wagers, climb the leaderboard, and evolve your avatar as you rise in ranks.  
        The higher you climb, the greater the rewards: exclusive status, community perks,  
        and the upcoming <strong>SSHP token</strong> payouts. <br /><br />
        Join the flock. Prove you're not just a sheep – you're the GOAT. 🐐
      </p>
    </section>
  );
}
