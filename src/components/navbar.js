import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useCurrentUser } from '../UserContext';
import Logout from './Logout';


export default function Navbar() {
    const { currentUser, setCurrentUser } = useCurrentUser();
    return (
        <div>
            <nav className="flex justify-between items-center py-4 border-b-2 px-4">
                <ul>
                    <CustomLink to="/" className="text-xl font-bold">Harbor</CustomLink>
                </ul>
                {currentUser == 'solver' && <ul>
                    <CustomLink to="/solve" className="text-indigo-700 bg-white border border-indigo-700 hover:bg-indigo-700 hover:text-white font-semibold py-2 px-4 rounded shadow hover:shadow-md transition duration-300 ease-in-out mx-2">
                        Solve
                    </CustomLink>
                </ul>}
                {currentUser == 'publisher' && <ul>
                    <CustomLink to="/publish" className="text-indigo-700 bg-white border border-indigo-700 hover:bg-indigo-700 hover:text-white font-semibold py-2 px-4 rounded shadow hover:shadow-md transition duration-300 ease-in-out mx-2">
                        Publish
                    </CustomLink>
                </ul>}
                {currentUser == null ?
                    <ul>
                        <CustomLink to="/login" className="text-indigo-700 bg-white border border-indigo-700 hover:bg-indigo-700 hover:text-white font-semibold py-2 px-4 rounded shadow hover:shadow-md transition duration-300 ease-in-out mx-2">
                            Login / Sign Up
                        </CustomLink>
                    </ul>
                    :
                    <ul>
                        <Logout />
                    </ul>}
                {/* // <h1>sjoajdsa</h1>} */}
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