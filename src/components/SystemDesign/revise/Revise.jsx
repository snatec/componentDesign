import React from 'react';
import '../../Dashboard/Dashboard.css';

const Revise = () => {
  const links = [
    { name: 'accordianRevise', url: '/accordianRevise' },
    { name: 'progressBarRevise', url: '/progressBarRevise' },
    { name: 'inputChipRevise', url: '/inputChipRevise' },
    { name: 'todolistRevise', url: '/todolistRevise' },
    { name: 'modalRevise', url: '/modalRevise' },
    { name: 'carosoulRevise', url: '/carosoulRevise' },
    { name: 'infinteScrollRevise', url: '/infinteScrollRevise' },
    { name: 'filtersRevise', url: '/filtersRevise' },
    { name: 'autoSearchRevise', url: '/autoSearchRevise' }
  ];

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">My Dashboard Revise</h1>
      <ul className="dashboard-links">
        {links.map((link, index) => (
          <li key={index} className="dashboard-item">
            <span>{index+1}.</span>
            <a href={link.url} className="dashboard-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Revise;
