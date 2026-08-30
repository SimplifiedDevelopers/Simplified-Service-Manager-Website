import { REGISTER_URL } from '../constants';
import { ZoomableImage } from './ZoomableImage';
import dashboardShot from '../assets/screenshots/dashboard.png';

export function Hero() {
  return (
    <section id="top" style={{ padding: '4.5rem 0 5rem' }}>
      <div className="container hero-grid" style={{ display: 'grid', gap: '3rem', alignItems: 'center' }}>
        <div>
          <span className="eyebrow">For field service &amp; installation companies</span>
          <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', fontWeight: 800, marginBottom: '1.25rem' }}>
            Dispatch, track, and close out every job — from one dashboard.
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '560px' }}>
            Schedule appointments, dispatch technicians, and follow every work order from open to close-out —
            with photos, signatures, and time tracking captured right from the field.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <a href={REGISTER_URL} className="btn btn-primary" style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}>
              Start Free Trial
            </a>
            <a href="#features" className="btn btn-secondary" style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}>
              See how it works
            </a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '13px', color: 'var(--muted-light)' }}>
            No credit card required · 14 days free, full access
          </p>
        </div>

        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            boxShadow: '0 20px 50px -20px rgba(15,23,42,0.25)',
            overflow: 'hidden',
          }}
        >
          <ZoomableImage
            src={dashboardShot}
            alt="Simplified Service Manager dashboard showing open, scheduled, and in-progress work orders, today's schedule, and work order status breakdown"
          />
        </div>
      </div>
    </section>
  );
}
