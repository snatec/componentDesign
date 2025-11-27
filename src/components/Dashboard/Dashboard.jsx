import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const links = [
    { name: 'autosearch', url: '/autosearch' },
    { name: 'tabForm', url: '/tabForm' },
    { name: 'progressBar', url: '/progressBar' },
    { name: 'inputChip', url: '/inputChip' },
    { name: 'accordion', url: '/accordion' },
    { name: 'todoList', url: '/todoList' },
    { name: 'pagination', url: '/pagination' },
    { name: 'otpInput', url: '/otpInput' },
    { name: 'filters', url: '/filters' },
    { name: 'carousel', url: '/carousel' },
    { name: 'infinteScroll', url: '/infinteScroll' },
    { name: 'modal', url: '/modal' },
    { name: 'starRating', url: '/starRating' },
  ];

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">My Dashboard</h1>
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

export default Dashboard;
