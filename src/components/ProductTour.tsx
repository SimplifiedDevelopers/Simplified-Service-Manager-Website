import { ZoomableImage } from './ZoomableImage';
import dispatchShot from '../assets/screenshots/dispatch.png';
import calendarShot from '../assets/screenshots/calendar.png';

const SHOTS = [
  {
    src: dispatchShot,
    title: 'Dispatch board',
    body: 'Every technician\'s day, color-coded and live — drag a job onto whoever\'s free.',
  },
  {
    src: calendarShot,
    title: 'Calendar',
    body: 'Week, day, month, or year — search across every appointment instantly.',
  },
];

export function ProductTour() {
  return (
    <section className="section section-alt">
      <div className="container">
        <span className="eyebrow">A closer look</span>
        <h2 className="section-heading" style={{ marginBottom: '3rem' }}>See it running a real day</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {SHOTS.map((s) => (
            <div key={s.title}>
              <div
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  boxShadow: '0 14px 34px -18px rgba(15,23,42,0.22)',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                }}
              >
                <ZoomableImage src={s.src} alt={s.title} />
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '0.25rem' }}>{s.title}</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
