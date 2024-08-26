import React from 'react';
import './service-card.css'

const ProjectCard = ({ project }) => {

    return (
        <div className='project-card'>
            <span>{project}</span>
        </div>
    )
}


export default ProjectCard