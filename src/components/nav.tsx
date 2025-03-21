import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../css/nav.css';

export function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="heading"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="sobre"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              onClick={closeMenu}
            >
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-112}
              duration={500}
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={closeMenu}
            >
              Projetos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contatosS"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
