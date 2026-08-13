import React from 'react';

const Loader = () => {
  return (
    <div className="loader-wrapper" role="status" aria-label="Loading">
      <div className="loader-orbit">
        <span className="loader-core" />
        <span className="loader-dot loader-dot-one" />
        <span className="loader-dot loader-dot-two" />
        <span className="loader-dot loader-dot-three" />
      </div>
      <span className="loader-label">Loading portfolio</span>
    </div>
  );
};

export default Loader;
