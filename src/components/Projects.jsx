import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    title: 'BITCollegeCS',
    description: 'Developed a dynamic web application in C# using the .NET Framework and ASP.NET, MVC architecture, Singleton pattern, LINQ, and XML.',
    link: 'https://github.com/OryxxCy/BITCollege_CS.git',
  },
  {
    title: 'Service Finders Website',
    description: 'A content management system (CMS) for service providers using PHP and PhpMyAdmin. Implemented login and registration system with cookies and sessions. Applied validation rules and string sanitization to enhance security.',
    link: 'https://github.com/OryxxCy/Service-Finders.git',
  },
  {
    title: 'Evergreen Enclave',
    description: 'Developed a dynamic e-commerce website for a plant selling business using Ruby on Rails. Utilized the Bulma framework for responsive and visually appealing design.',
    link: 'https://github.com/OryxxCy/Evergreen_Enclave.git',
  },
];

const Projects = () => {
  return (
    <section id='projects' className="bg-gradient-to-r from-pink-300 to-indigo-300 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <a href={project.link} className="text-blue-600 mt-4 hover:underline">
                  <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub Link
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/OryxxCy" className="btn btn-primary">
            See more of my projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
