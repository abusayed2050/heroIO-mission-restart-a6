import React from 'react';
import { Link, NavLink, useNavigation } from 'react-router';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const navLinkClass = ({ isActive, isPending }) =>
    `text-sm font-medium transition-colors flex items-center gap-1 ${isPending
      ? "text-purple-400 animate-pulse"
      : isActive
        ? "text-purple-600 underline underline-offset-4 pointer-events cursor-default"
        : "text-gray-600 hover:text-gray-900"
    }`;

  const Spinner = () => (
    <span className="w-3 h-3 border-2 border-purple-400 border-t-transparent rounded-full animate-spin inline-block" />
  );

  const links = (
    <nav className="flex items-center gap-8">
      <NavLink to="/" end className={navLinkClass}>
        {({ isPending }) => <>{isPending && <Spinner />} Home</>}
      </NavLink>
      <NavLink to="/apps" className={navLinkClass}>
        {({ isPending }) => <>{isPending && <Spinner />} Apps</>}
      </NavLink>
      <NavLink to="/installation" className={navLinkClass}>
        {({ isPending }) => <>{isPending && <Spinner />} Installation</>}
      </NavLink>
    </nav>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={Logo} alt="Logo" />
            </div>
            <span className="font-display font-bold text-lg">
              <span className="text-black">App</span><span className="text-purple-600">Vault</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-3">

          <a
            href="https://github.com/abusayed2050"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Contribute
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;