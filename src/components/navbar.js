import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useCurrentUser } from '../UserContext';
import Logout from './Logout';
import { ReactComponent as Earth } from '../assets/earth.svg';
import { ReactComponent as CobaltEarth } from '../assets/cobalt_earth.svg';



export default function Navbar() {
    const { currentUser, setCurrentUser } = useCurrentUser();
    return (
        <div>
            <nav className="flex justify-between items-center py-4 border-b-2 px-4 bg-cobalt-blue">
                <ul>
                    <CustomLink to="/" className="text-xl font-bold text-white">Harbor</CustomLink>
                </ul>
                {currentUser != null && currentUser[1] == 'solver' && <ul>
                    <CustomLink to="/solve" className="text-indigo-700 bg-white border border-indigo-700 hover:bg-indigo-700 hover:text-white font-semibold py-2 px-4 rounded shadow hover:shadow-md transition duration-300 ease-in-out mx-2">
                        Solve
                    </CustomLink>
                </ul>}
                {currentUser != null && currentUser[1] == 'publisher' && <ul>
                    <CustomLink to="/publish" className="text-indigo-700 bg-white border border-indigo-700 hover:bg-indigo-700 hover:text-white font-semibold py-2 px-4 rounded shadow hover:shadow-md transition duration-300 ease-in-out mx-2">
                        Publish
                    </CustomLink>
                </ul>}
                <div className="flex items-center">
                    {currentUser == null ? (
                        <ul>
                            <CustomLink to="/login" className="text-white hover:bg-white hover:text-white border border-white font-semibold py-2 px-4 rounded hover:shadow-md transition duration-300 ease-in-out mx-2">
                                Login / Sign Up
                            </CustomLink>
                        </ul>
                    ) : (
                        <ul className="flex items-center space-x-4">
                            <CustomLink to="/profile" className="text-white hover:bg-white hover:text-white border border-white font-semibold py-2 px-4 rounded hover:shadow-md transition duration-300 ease-in-out">
                                Profile
                            </CustomLink>
                            <Logout />
                        </ul>
                    )}
                    <ul>
                        <CustomLink to="/" className="flex items-center text-white hover:bg-white hover:text-white border border-white font-semibold py-1 px-2 rounded hover:shadow-md transition duration-300 ease-in-out mx-2">
                            <Earth
                                style={{ width: '20px', height: '20px', marginRight: '6px' }}
                            />
                            EN
                        </CustomLink>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <ul className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </ul>
    )
}