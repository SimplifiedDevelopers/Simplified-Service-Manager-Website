import { SUPPORT_EMAIL } from '../constants';

type Cell = boolean | string;

const ROWS: { label: string; basic: Cell; pro: Cell }[] = [
  { label: 'Dispatch board', basic: true, pro: true },
  { label: 'Calendar & scheduling', basic: true, pro: true },
  { label: 'Work orders, start to finish', basic: true, pro: true },
  { label: 'GPS tracking', basic: true, pro: true },
  { label: 'Customers & sites', basic: true, pro: true },
  { label: 'Works from any phone (PWA)', basic: true, pro: true },
  { label: 'Time clock & payroll', basic: false, pro: true },
  { label: 'Estimates', basic: false, pro: true },
  { label: 'Inventory', basic: false, pro: true },
  { label: 'User seats', basic: 'Set per account', pro: 'Set per account' },
];

function Check() {
  return (
    <span style={{ color: 'var(--brand)', fontSize: '17px', fontWeight: 700 }} aria-label="Included">
      ✓
    </span>
  );
}

function Dash() {
  return (
    <span style={{ color: 'var(--muted-light)', fontSize: '15px' }} aria-label="Not included">
      —
    </span>
  );
}

function Cell({ value }: { value: Cell }) {
  if (typeof value === 'string') {
    return <span style={{ fontSize: '13.5px', color: 'var(--muted)' }}>{value}</span>;
  }
  return value ? <Check /> : <Dash />;
}

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <span className="eyebrow">Pricing</span>
        <h2 className="section-heading">Two plans, straightforward either way</h2>
        <p className="section-sub" style={{ marginBottom: '3rem' }}>
          Every plan includes dispatch, scheduling, and work orders. Pro adds time tracking, estimates, and
          inventory. Reach out for a quote sized to your team.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.875rem 1rem', borderBottom: '2px solid var(--border)' }} />
                <th style={{ textAlign: 'center', padding: '0.875rem 1rem', borderBottom: '2px solid var(--border)', fontSize: '1.0625rem', fontWeight: 800 }}>
                  Basic
                </th>
                <th
                  style={{
                    textAlign: 'center',
                    padding: '0.875rem 1rem',
                    borderBottom: '2px solid var(--brand)',
                    fontSize: '1.0625rem',
                    fontWeight: 800,
                    color: 'var(--brand)',
                  }}
                >
                  Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid var(--border)', fontSize: '14.5px' }}>
                    {row.label}
                  </td>
                  <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
                    <Cell value={row.basic} />
                  </td>
                  <td
                    style={{
                      padding: '0.875rem 1rem',
                      borderBottom: '1px solid var(--border)',
                      textAlign: 'center',
                      background: 'var(--bg-alt)',
                    }}
                  >
                    <Cell value={row.pro} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="btn btn-primary" style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}>
            Contact Us
          </a>
          <p style={{ marginTop: '0.875rem', fontSize: '13px', color: 'var(--muted-light)' }}>
            Every new account starts on a 14-day free trial with full access, regardless of plan.
          </p>
        </div>
      </div>
    </section>
  );
}
