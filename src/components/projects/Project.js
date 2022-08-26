import React from 'react';
import './Project.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Project({ id, name, selected, selectProject }) {
  return (
    // <div className={selected ? 'project-container completed' : 'project-container'}>
    <div className='project-container '>
      <div className='project-text' onClick={() => selectProject(id)}>
        {name}
      </div>
      <div className='project-container-icons' onClick={() => selectProject(id)}>
        <AiOutlineCloseCircle className='project-icon' />
      </div>
    </div>
  );
}

export default Project;
