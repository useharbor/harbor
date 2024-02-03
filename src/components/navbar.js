import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="flex justify-between items-center py-4 px-4 bg-cobalt-blue shadow text-white border-b border-solid border-white">
                <Link to="/" className="text-xl font-bold">Harbor</Link>
                <ul>
                    <CustomLink to="/solve" className="hover:bg-white hover:text-blue font-semibold py-2 px-4 rounded hover:shadow-md transition duration-300 ease-in-out mx-2">
                        Solve
                    </CustomLink>
                </ul>
                <ul>
                    <CustomLink to="/publish" className="hover:bg-white hover:text-white font-semibold py-2 px-4 rounded hover:shadow-md transition duration-300 ease-in-out mx-2">
                        Publish
                    </CustomLink>
                </ul>
                <ul>
                    <CustomLink to="/about" className="hover:bg-white hover:text-white font-semibold py-2 px-4 rounded hover:shadow-md transition duration-300 ease-in-out mx-2">
                        About
                    </CustomLink>
                </ul>
                <ul>
                    <CustomLink to="/login" className="hover:bg-white hover:text-white font-semibold py-2 px-4 rounded hover:shadow-md transition duration-300 ease-in-out mx-2">
                        Login / Sign Up
                    </CustomLink>
                </ul>
            </nav>
        </div>

    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}