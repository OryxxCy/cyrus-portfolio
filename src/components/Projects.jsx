import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import CurrencyConverter from './Currency-Converter';

const projects = [
  {
    title: 'Evergreen Enclave',
    description: 'A dynamic e-commerce website for a plant shop using Ruby on Rails and the Bulma framework, creating a responsive design to improve user experience. Integrated external APIs to get plants information and implemented Stripe for payment processing.',
    link: 'https://github.com/OryxxCy/Evergreen_Enclave.git',
  },
  {
    title: 'Service Finders Website',
    description: 'A content management system (CMS) for service providers using PHP and PhpMyAdmin. Implemented login and registration system with cookies and sessions. Applied validation rules and string sanitization to enhance security.',
    link: 'https://github.com/OryxxCy/Service-Finders.git',
  },
  {
    title: 'BITCollegeCS',
    description: 'Developed a dynamic web application in C# using the .NET Framework and ASP.NET, MVC architecture, Singleton pattern, LINQ, and XML.',
    link: 'https://github.com/OryxxCy/BITCollege_CS.git',
  },
];

const Projects = () => {
  return (
    <section id='projects' className="bg-gradient-to-r from-pink-300 to-indigo-300 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-black font-bold">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map(( project ) => (
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <a href={project.link} className="text-blue-600 mt-4 hover:underline">
                  <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub Link
                </a>
              </div>
            </div>
          ))}
            <div className="card w-full bg-base-100 shadow-xl lg:col-start-2">
              <div className="card-body">
                <CurrencyConverter/>
              </div>
            </div>
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
