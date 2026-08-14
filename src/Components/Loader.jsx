import React from 'react';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="wrapper">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="shadow" />
        <div className="shadow" />
        <div className="shadow" />
      </div>
    </div>
  );
}

export default Loader;
