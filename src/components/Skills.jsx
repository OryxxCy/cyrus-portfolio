import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faLock, faCloud, faCogs, faGem } from '@fortawesome/free-solid-svg-icons';
import { faPhp, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const skills = [
  {
    title: "NextJS, Tailwind CSS and REST API",
    description: "Worked with a team to build a website using NextJS, Tailwind CSS and client’s RESTful API, contributing to the project on GitHub for version control and code reviews.",
    icon: faCode
  },
  {
    title: "PHP and PhpMyAdmin",
    description: "Designed and implemented a Content Management System (CMS) for service providers using PHP and PhpMyAdmin, enhancing user management through a robust login and registration system with cookies and sessions.",
    icon: faPhp
  },
  {
    title: "C# and .NET Framework",
    description: "Developed a dynamic web application that manages student records in C# using the .NET Framework and ASP.NET, implementing MVC architecture, Singleton pattern, LINQ, and XML to enhance code efficiency and maintainability.",
    icon: faCogs
  },
  {
    title: "Ruby on Rails",
    description: "Built a dynamic e-commerce website for a plant shop using Ruby on Rails and the Bulma framework, creating a responsive design to improve user experience. Integrated external APIs to get plants information.",
    icon: faGem
  },
  {
    title: "Security",
    description: "Implemented validation rules and string sanitization in web applications, enhancing security and protecting user data from common vulnerabilities.",
    icon: faLock
  },
  {
    title: "Database Management",
    description: "Managed database systems using MySQL, PostgreSQL, SQL, and NoSQL, ensuring efficient data storage and retrieval for web applications.",
    icon: faDatabase
  },
  {
    title: "Version Control",
    description: "Developed multiple projects using GitHub for collaboration, version control, and code reviews.",
    icon: faSquareGithub
  },
  {
    title: "Cloud Services",
    description: "Knowledge of AWS and Heroku for deploying web applications.",
    icon: faCloud
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 w-10/12 mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills and Abilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 shadow-lg rounded-lg flex flex-col items-center text-center">
              <div className="mb-4">
                <FontAwesomeIcon icon={skill.icon} size="3x" className="text-indigo-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
