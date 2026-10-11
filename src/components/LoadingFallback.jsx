import React from 'react';

/**
 * Meaningful fallback UI rendered by <Suspense>
 * while route chunks are loaded on demand.
 */
function LoadingFallback({ message = "Loading component chunk..." }) {
  return (
    <div className="fallback-container" role="status" aria-live="polite">
      <div className="spinner"></div>
      <p className="fallback-text">{message}</p>
      <span className="fallback-subtext">Fetching code-split JavaScript chunk from server...</span>
    </div>
  );
}

export default LoadingFallback;
