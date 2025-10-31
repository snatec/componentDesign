import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const links = [
    { name: 'autosearch', url: '/autosearch' },
    { name: 'tabForm', url: '/tabForm' },
    { name: 'progressBar', url: '/progressBar' },
    { name: 'inputChip', url: '/inputChip' },
    { name: 'accordion', url: '/accordion' },
    { name: 'todoList', url: '/todoList' }
  ];

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">My Dashboard</h1>
      <ul className="dashboard-links">
        {links.map((link, index) => (
          <li key={index}>
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
