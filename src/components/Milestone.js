// src/components/Milestone.js
import React from 'react';
import './Milestone.css';

const Milestone = ({ data }) => {
  return (
    <div className="milestone">
      <img src={data.image} alt={data.title} className="milestone-image" />
      <div className="milestone-content">
        <h3>{data.year}</h3>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Milestone;
