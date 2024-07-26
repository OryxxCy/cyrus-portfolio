import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="navbar bg-base-100 w-10/12 mx-auto">
        <div className="flex-1 flex items-center">
            <a className="btn btn-ghost text-xl flex items-center space-x-2">
                <img src='/src/assets/Icon.png' alt="Logo" className="logo h-8 w-8" />Cyrus' Portfolio
            </a>
        </div>
        <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1">
                <li><a href="#skills" className="hover:underline">Skills</a></li>
                <li><a href="#projects" className="hover:underline">Projects</a></li>
                <li><a href="#background" className="hover:underline">Background</a></li>
                <li><a href="#contact" className="hover:underline">Contact Information</a></li>
            </ul>
        </div>
        <div className="flex-none lg:hidden">
            <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <FontAwesomeIcon icon={faList} />
                </label>
                <ul tabIndex="0" className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#skills" className="hover:underline">Skills</a></li>
                    <li><a href="#projects" className="hover:underline">Projects</a></li>
                    <li><a href="#background" className="hover:underline">Background</a></li>
                    <li><a href="#contact" className="hover:underline">Contact Information</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Header;
