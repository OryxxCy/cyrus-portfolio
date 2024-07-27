import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-pink-300 to-indigo-300 py-20">
      <div className="container mx-auto text-center w-10/12 mx-auto">
        <h1 className="text-5xl text-black font-bold">Hi there! I am Cyrusbien Sarceno</h1>
        <p className="text-xl text-black mt-4">
            I've used HTML, CSS, JavaScript, PHP, React, C#, .NET, Next.js, Tailwind CSS, and Ruby on Rails to build web applications, giving me a strong foundation in web and software development. 
            I enjoy creating responsive layouts, adding dynamic features, and developing solid back-end systems. 
            I’m also skilled in managing databases like MySQL, PostgreSQL, and SQL Server Management Studio, and have experience with tasks such as setting up login systems and integrating external APIs. 
            My goal is to turn ideas into reality through coding, meeting both technical and user needs.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/cyrusbiensarceno" className="text-blue-600 hover:underline flex items-center space-x-2">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/OryxxCy" className="text-gray-800 hover:underline flex items-center space-x-2">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <span>GitHub</span>
          </a>
          <a href="https://drive.google.com/file/d/14RA0l7rJfNkPbm7oILgMfcCyD08WbDt5/view?usp=sharing" className="text-red-500 hover:underline flex items-center space-x-2">
            <FontAwesomeIcon icon={faFile} size="2x" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
