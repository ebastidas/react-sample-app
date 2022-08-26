import React, { useState } from 'react';
import Project from './Project';
import ProjectDetails from './ProjectDetails';
import './ProjectList.css';
import projectsData from '../../data/projects.json';

function ProjectList() {
  const [projects, setProjects] = useState(() => {
    return projectsData;
  });

  const [selectedProject, setSelectedProject] = useState(() => {
    return projectsData[0];
  });

  const SelectProject = (selectedId) => {
    const ProjectSelected = projects.find((project) => project.id === selectedId);
    setSelectedProject(ProjectSelected);
  };

  return (
    <>
      <div class='projects-container'>
        <div className='project-list-container'>
          {projects.map((project) => (
            <Project key={project.id} id={project.id} name={project.name} selectProject={SelectProject} />
          ))}
        </div>
        <div>
          <ProjectDetails
            key={selectedProject.id}
            id={selectedProject.id}
            name={selectedProject.name}
            internalStatus={selectedProject['internal-status']}
            sectors={selectedProject.sectors}
            logo={selectedProject.logo}
            website={selectedProject.website}
            projectDesc={selectedProject['project-desc']}
            transactions={selectedProject.transaction}
          />
        </div>
      </div>
    </>
  );
}

export default ProjectList;
