import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Solve_Navbar() {
    return (
        <div>
            <nav className="flex justify-between items-center py-4 border-b-2 px-4">
                <ul className="flex items-center">
                    <li className="mr-2">
                    <CustomLink to="/solve" className="text-indigo-700 bg-white border border-indigo-700 hover:bg-indigo-700 hover:text-white font-semibold py-2 px-4 rounded shadow hover:shadow-md transition duration-300 ease-in-out">
                        Edit Text
                    </CustomLink>
                    </li>
                    <li>
                    <CustomLink to="/solve-vote" className="text-indigo-700 bg-white border border-indigo-700 hover:bg-indigo-700 hover:text-white font-semibold py-2 px-4 rounded shadow hover:shadow-md transition duration-300 ease-in-out">
                        Vote
                    </CustomLink>
                    </li>
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