const FEATURES = [
  {
    icon: '🧰',
    title: 'Dispatch board',
    body: 'A live, color-coded board of every technician\'s day — drag and drop jobs onto whoever\'s free, reassign on the fly, and watch completed jobs fade so you always know what\'s still open.',
  },
  {
    icon: '📅',
    title: 'Calendar & scheduling',
    body: 'Week, day, month, and year views with color-coded appointments, live search across every booking, and reminders so nothing gets missed.',
  },
  {
    icon: '📋',
    title: 'Work orders, start to finish',
    body: 'Every job moves through open, scheduled, in progress, and completed — with a close-out checklist, photos and documents, and customer signature capture right on the tech\'s device.',
  },
  {
    icon: '📍',
    title: 'GPS tracking',
    body: 'See where your team actually is — real arrival and departure times per job, a live current-location view, and a drive-route trail for the day.',
  },
  {
    icon: '⏱️',
    title: 'Time clock & payroll',
    body: 'Technicians clock in and out per job or for the day. Office can review and correct logged time, and payroll summaries roll up by pay period automatically.',
  },
  {
    icon: '👥',
    title: 'Customers & sites',
    body: 'Keep every customer\'s job sites, contacts, and history in one place — searchable instantly from anywhere in the app.',
  },
  {
    icon: '📄',
    title: 'Estimates',
    body: 'Build line-item estimates and send them straight to the customer as a branded PDF, ready to approve.',
  },
  {
    icon: '📱',
    title: 'Works from any phone',
    body: 'Install it straight to a technician\'s home screen like a real app — no App Store, no separate download, still works from the truck.',
  },
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <span className="eyebrow">Features</span>
        <h2 className="section-heading">Everything a field service team needs, in one place</h2>
        <p className="section-sub" style={{ marginBottom: '3rem' }}>
          Built for dispatchers, technicians, and the office staff keeping it all running.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.75rem',
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '1rem' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.6 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
