const POINTS = [
  {
    icon: '🗄️',
    title: 'Your own isolated database',
    body: 'Every company gets its own private database file — your data is never mixed, queried alongside, or stored in the same table as any other company\'s.',
  },
  {
    icon: '🔐',
    title: 'Encrypted integration credentials',
    body: 'Email and messaging provider credentials are encrypted at rest with AES-256-GCM — never stored or logged in plain text.',
  },
  {
    icon: '🛡️',
    title: 'Role-based access control',
    body: 'Technician, sales rep, dispatcher, and admin roles each see only what their job needs, with granular per-user access grants for exceptions.',
  },
];

export function Security() {
  return (
    <section id="security" className="section section-alt">
      <div className="container">
        <span className="eyebrow">Security</span>
        <h2 className="section-heading" style={{ marginBottom: '3rem' }}>Built to keep your company's data separate and safe</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {POINTS.map((p) => (
            <div
              key={p.title}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.75rem',
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '1rem' }}>{p.icon}</div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '0.5rem' }}>{p.title}</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.6 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
