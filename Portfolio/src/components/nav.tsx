import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../css/nav.css'

export function Nav(){
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const closeMenu = () => setClick(false)

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
						<a href="/" onClick={closeMenu}>
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="#sobre" onClick={closeMenu}>
							Sobre
						</a>
					</li>
					<li className="nav-item">
						<a href="/" onClick={closeMenu}>
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="#skills" onClick={closeMenu}>
							Skills
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}


