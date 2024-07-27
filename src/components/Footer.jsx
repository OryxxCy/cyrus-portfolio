import React from 'react';

function Footer() {
  return (
    <footer class="footer bg-neutral text-neutral-content items-center p-4">
        <aside class="grid-flow-col items-center">
            <p>Copyright © {new Date().getFullYear()} Cyrusbien Sarceno - All rights reserved</p>
        </aside>
        <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <ul className="menu menu-horizontal px-1">
                <li><a href="#skills" className="hover:underline">Skills</a></li>
                <li><a href="#projects" className="hover:underline">Projects</a></li>
                <li><a href="#background" className="hover:underline">Background</a></li>
                <li><a href="#contact" className="hover:underline">Contact Information</a></li>
            </ul>
        </nav>
    </footer>
  );
}

export default Footer;
