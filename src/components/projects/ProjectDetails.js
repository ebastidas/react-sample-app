import React from 'react';
import './ProjectDetails.css';
import { Link } from 'react-router-dom';

function ProjectDetails({ id, name, internalStatus, sectors, logo, website, projectDesc, transactions }) {
  return (
    <div>
      <p>Details:</p>
      <div class='project-details-container'>
        <div>{id}</div>
        <div>{name}</div>
      </div>

      <div class='project-details-container'>
        <div>{projectDesc}</div>
      </div>

      <p>Transactions:</p>
      <div class='project-details-container'>
        {transactions.map((transaction) => (
          <div>
            <Link to={'/transaction/' + transaction}>{transaction}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
