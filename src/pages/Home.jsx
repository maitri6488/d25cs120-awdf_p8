import React from 'react';

function Home() {
  return (
    <div>
      <h2 className="page-title">Practical Overview: Code Splitting & Lazy Loading</h2>
      <span className="info-badge">Initial Entry Route (App Shell)</span>

      <div className="card">
        <h3>Objective</h3>
        <p>
          Optimize React frontend performance using <code>React.lazy()</code> and <code>&lt;Suspense&gt;</code> to split
          routes and heavy components into on-demand JavaScript chunks.
        </p>
      </div>

      <div className="card">
        <h3>Bundle Architecture</h3>
        <p style={{ marginBottom: '6px' }}><strong>1. Without Lazy Loading:</strong></p>
        <pre>index.html ──► bundle.js [All routes bundled together] (~175 kB)</pre>

        <p style={{ marginTop: '12px', marginBottom: '6px' }}><strong>2. With Route-based Code Splitting:</strong></p>
        <pre>
index.html ──► index.js (App Shell ~167 kB)
           ├── /tasks      ──► Tasks.js (loaded on demand)
           ├── /analytics  ──► Analytics.js + HeavyChart.js (loaded on demand)
           └── /contact    ──► Contact.js (loaded on demand)
        </pre>
      </div>

      <div className="card">
        <h3>DevTools Verification Steps</h3>
        <ol style={{ paddingLeft: '20px', fontSize: '0.88rem' }}>
          <li>Open Browser DevTools (F12) and select the <strong>Network</strong> tab.</li>
          <li>Filter by <strong>JS</strong> and refresh the page to view initial chunk loading.</li>
          <li>Click any route in the navbar (Tasks, Analytics, Contact).</li>
          <li>Notice the separate JS chunk downloaded asynchronously across the network.</li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
