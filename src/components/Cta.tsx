import { REGISTER_URL } from '../constants';

export function Cta() {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            background: 'var(--brand)',
            borderRadius: '16px',
            padding: '3.5rem 2.5rem',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.125rem)', fontWeight: 800, color: '#fff', marginBottom: '0.875rem' }}>
            Ready to run your dispatch out of one dashboard?
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.85)', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
            Start your 14-day free trial — full access, no credit card required.
          </p>
          <a
            href={REGISTER_URL}
            className="btn"
            style={{ background: '#fff', color: 'var(--brand)', padding: '0.875rem 1.75rem', fontSize: '1rem' }}
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
