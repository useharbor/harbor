import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="flex justify-between items-center py-4 border-b-2 px-4">
                <Link to="/" className="text-xl font-bold">Harbor</Link>
                <ul>
                    <CustomLink to="/login" className="text-indigo-700 bg-white border border-indigo-700 hover:bg-indigo-700 hover:text-white font-semibold py-2 px-4 rounded shadow hover:shadow-md transition duration-300 ease-in-out mx-2">
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