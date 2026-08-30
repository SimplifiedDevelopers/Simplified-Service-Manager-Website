import logo from '../assets/logo.png';
import { SUPPORT_EMAIL, SUPPORT_PHONE_DISPLAY, SUPPORT_PHONE_HREF } from '../constants';

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '3rem 0' }}>
      <div
        className="container"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'flex-start' }}
      >
        <div>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontWeight: 800, fontSize: '16px', marginBottom: '0.75rem' }}>
            <img src={logo} alt="" style={{ width: '28px', height: '28px', borderRadius: '6px' }} />
            Simplified Service Manager
          </a>
          <p style={{ fontSize: '13.5px', color: 'var(--muted-light)', maxWidth: '320px', lineHeight: 1.6 }}>
            Dispatch, scheduling, and work order management for field service and installation companies.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '14px' }}>
          <span style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Product</span>
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#security">Security</a>
          <a className="nav-link" href="#pricing">Pricing</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '14px' }}>
          <span style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Contact</span>
          <a className="nav-link" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          <a className="nav-link" href={SUPPORT_PHONE_HREF}>{SUPPORT_PHONE_DISPLAY}</a>
        </div>
      </div>

      <div className="container" style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted-light)' }}>
          &copy; {new Date().getFullYear()} Simplified Developers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
