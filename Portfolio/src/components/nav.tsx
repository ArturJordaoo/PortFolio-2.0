import { Link } from 'react-scroll'

export function Nav() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active">
						<Link
							activeClass="active"
							to="about-me"
							spy={true}
							smooth={true}
							offset={50}
							duration={400}
						>
							tedasdasdasdasd
						</Link>{' '}
						<span className="sr-only">(current)</span>
					</a>
				</div>
			</div>
		</nav> /* <nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="about-me" className='teste'>teste</Link>
		</nav> */
	)
}
