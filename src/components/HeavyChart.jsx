import React, { useState, useEffect } from 'react';

/**
 * HeavyChart component - Demonstrates supplementary problem:
 * Lazy loading an isolated heavy component on demand.
 */
function HeavyChart() {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    // Generate simulated dataset
    const points = [
      { name: 'Monday', value: 82 },
      { name: 'Tuesday', value: 95 },
      { name: 'Wednesday', value: 64 },
      { name: 'Thursday', value: 88 },
      { name: 'Friday', value: 76 },
    ];
    setDataPoints(points);
  }, []);

  return (
    <div className="card">
      <h3>Weekly Completion Rates (Heavy Component)</h3>
      <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '12px' }}>
        This chart was bundled in its own separate chunk (<code>HeavyChart-[hash].js</code>) and loaded only when requested.
      </p>

      {dataPoints.map((item) => (
        <div key={item.name} className="chart-bar-container">
          <span className="chart-bar-label">{item.name}</span>
          <div className="chart-bar-bg">
            <div
              className="chart-bar-fill"
              style={{ width: `${item.value}%` }}
            ></div>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, width: '40px' }}>
            {item.value}%
          </span>
        </div>
      ))}
    </div>
  );
}

export default HeavyChart;
