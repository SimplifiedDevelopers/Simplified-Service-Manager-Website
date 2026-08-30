import logo from '../assets/logo.png';
import { REGISTER_URL } from '../constants';

export function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontWeight: 800, fontSize: '17px' }}>
          <img src={logo} alt="" style={{ width: '32px', height: '32px', borderRadius: '7px' }} />
          Simplified Service Manager
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', fontSize: '14px', fontWeight: 500 }}>
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#how-it-works">How It Works</a>
          <a className="nav-link" href="#security">Security</a>
          <a className="nav-link" href="#pricing">Pricing</a>
          <a
            href={REGISTER_URL}
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.125rem', fontSize: '14px' }}
          >
            Start Free Trial
          </a>
        </nav>
      </div>
    </header>
  );
}
