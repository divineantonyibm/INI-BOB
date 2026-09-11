import './Home.scss';

const queues = [
  {
    title: 'Tool approvals',
    items: [
      { investigationNumber: 'INV12345', title: 'Interface outage investigation', detail: 'Network diagnostic tool', description: 'Scans active interfaces for link-state errors and duplex mismatches', age: '2h 15m' },
      { investigationNumber: 'INV12347', title: 'Latency investigation', detail: 'Traffic flow tool', description: 'Traces packet paths and measures per-hop round-trip latency', age: '1h 05m' },
      { investigationNumber: 'INV12346', title: 'Packet loss investigation', detail: 'Path analysis tool', description: 'Identifies segments with sustained drop rates above threshold', age: '45m' },
      { investigationNumber: 'INV12353', title: 'BGP route flap investigation', detail: 'Route monitoring tool', description: 'Tracks BGP session stability and logs prefix withdrawal events', age: '30m' },
      { investigationNumber: 'INV12354', title: 'DNS resolution investigation', detail: 'DNS lookup tool', description: 'Queries upstream resolvers to detect misconfigured or stale records', age: '15m' },
    ],
  },
  {
    title: 'Remediation approvals',
    items: [
      { investigationNumber: 'INV12348', title: 'Interface outage investigation', detail: 'Restart interface remediation', age: '5h 30m', showPlanActions: true },
      { investigationNumber: 'INV12349', title: 'Packet loss investigation', detail: 'Update routing remediation', age: '12h 10m', showPlanActions: true },
      { investigationNumber: 'INV12355', title: 'BGP route flap investigation', detail: 'Reset BGP session remediation', age: '1h 45m', showPlanActions: true },
    ],
  },
  {
    title: 'Proposed policy changes',
    items: [
      { investigationNumber: 'INV12350', title: 'Latency investigation', detail: 'Increase alert threshold', age: '3d 02h' },
      { investigationNumber: 'INV12356', title: 'Packet loss investigation', detail: 'Update firewall policy', age: '1d 14h' },
      { investigationNumber: 'INV12357', title: 'DNS resolution investigation', detail: 'Allow recursive queries', age: '6h 20m' },
    ],
  },
];

const trackedInvestigations = [
  { investigationNumber: 'INV12351', title: 'Core router instability', detail: 'Tracked by Hazel' },
  { investigationNumber: 'INV12352', title: 'Intermittent packet loss', detail: 'Tracked by Hazel' },
];

export default function Home() {
  return (
    <main className="home">
   
      <section className="home__welcome" aria-labelledby="welcome-title">
        <div className="home__welcome-heading">
          <div>
            <h1 id="welcome-title">Welcome, Hazel</h1>
            <p>You have 3 queues requiring human review.</p>
          </div>
        </div>
      </section>

      <section className="home__queues" aria-label="Action queues">
        {queues.map((queue) => (
          <article className="queue" key={queue.title}>
            <header className="queue__header">
              <h2>
                {queue.title}
                <span
                  className="queue__count"
                  role="status"
                  aria-label={`${queue.items.length} items in ${queue.title}`}
                >
                  {queue.items.length}
                </span>
              </h2>
            </header>
            <div className="queue__table" role="table" aria-label={queue.title}>
              {queue.items.map((item, index) => (
                <div className="queue__row" role="row" key={`${item.investigationNumber}-${index}`}>
                  <span className="queue__investigation" role="cell">
                    <span className="queue__meta-row">
                      <strong>{item.investigationNumber}</strong>
                      <time>{item.age}</time>
                    </span>
                    <span className="queue__investigation-title">{item.title}</span>
                    <small>{item.detail}</small>
                    {'description' in item && item.description && (
                      <p className="queue__investigation-desc">{item.description}</p>
                    )}
                    {'description' in item && (
                      <div className="queue__row-actions">
                        <button className="queue__btn queue__btn--secondary">View</button>
                        <button className="queue__btn queue__btn--primary">Approve</button>
                      </div>
                    )}
                    {'showPlanActions' in item && (
                      <div className="queue__row-actions">
                        <button className="queue__btn queue__btn--secondary">View</button>
                        <button className="queue__btn queue__btn--primary">Run plan</button>
                      </div>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="tracked" aria-labelledby="tracked-title">
        <header className="tracked__header">
          <div>
            <h2 id="tracked-title">Tracked investigations</h2>
            <p>Your saved investigations</p>
          </div>
          <span className="queue__count" role="status" aria-label={`${trackedInvestigations.length} tracked investigations`}>
            {trackedInvestigations.length}
          </span>
        </header>
        <div className="tracked__list">
          {trackedInvestigations.map((investigation) => (
            <div className="tracked__row" key={investigation.investigationNumber}>
              <strong>{investigation.investigationNumber}</strong>
              <span>
                <b>{investigation.title}</b>
                <small>{investigation.detail}</small>
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// Made with Bob
