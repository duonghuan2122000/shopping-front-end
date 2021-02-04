import React from 'react';

const Navbar: React.FC = () => {
    const [isActive, setIsActive] = React.useState(false);

    const collapseNavbar = () => {
        setIsActive(!isActive);
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width={112} height={28} />
                </a>
                <a role="button" className={isActive ? 'is-active navbar-burger' : 'navbar-burger'} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={collapseNavbar}>
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navbarBasicExample" className={isActive ? 'is-active navbar-menu' : 'navbar-menu'}>
                <div className="navbar-start">
                    <a className="navbar-item">
                        Home
            </a>
                    <a className="navbar-item">
                        Documentation
            </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
              </a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                </a>
                            <a className="navbar-item">
                                Jobs
                </a>
                            <a className="navbar-item">
                                Contact
                </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                Report an issue
                </a>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;