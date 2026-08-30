const STEPS = [
  {
    step: '1',
    title: 'Start your free trial',
    body: 'Sign up with your company name and get your own private company account, ready to use in minutes.',
  },
  {
    step: '2',
    title: 'Add your team & customers',
    body: 'Bring in your technicians and dispatchers, then add your customers and their job sites.',
  },
  {
    step: '3',
    title: 'Dispatch the work',
    body: 'Schedule appointments and dispatch jobs to whoever\'s free — techs see it instantly from their phone.',
  },
  {
    step: '4',
    title: 'Track it from one dashboard',
    body: 'Job status, technician location, logged time, and close-out photos — all live, all in one place.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <span className="eyebrow">How it works</span>
        <h2 className="section-heading" style={{ marginBottom: '3rem' }}>From sign-up to your first dispatched job</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '2rem',
          }}
        >
          {STEPS.map((s) => (
            <div key={s.step}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'var(--brand)',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '17px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                {s.step}
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
