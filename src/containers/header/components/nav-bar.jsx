import React from 'react';
import { NAVIGATE } from '../../../constants';

const { about, contact, home, projects, resume } = NAVIGATE;

const NavigationBar = () => (
    <ul
        id="nav"
        className="nav"
        style={{borderRadius: '16px'}}
    >
        <li className="current">
            <a
            className="smoothscroll"
            href="#home"
            >
            { home }
            </a>
        </li>
        <li>
            <a
            className="smoothscroll"
            href="#about"
            >
            { about }
            </a>
        </li>
        <li>
            <a
            className="smoothscroll"
            href="#resume"
            >
            { resume }
            </a>
        </li>
        <li>
            <a
            className="smoothscroll"
            href="#portfolio"
            >
            { projects }
            </a>
        </li>
        <li>
            <a
            className="smoothscroll"
            href="#contact"
            >
            { contact }
            </a>
        </li>
    </ul>
);

export default NavigationBar;