import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../UserContext';

export default function Logout() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const { setCurrentUser } = useCurrentUser();

    const handleLogout = () => {
        setCurrentUser(null); // Resetting the current user to null
        navigate('/'); // Redirecting to the home page after logout
    };

    return (
        <>
            <button onClick={() => setShowModal(true)} className="py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300">
                Logout
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
                        <p>Are you sure you want to logout?</p>
                        <div className="flex justify-end gap-4 mt-4">
                            <button onClick={() => setShowModal(false)} className="py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400 transition duration-300">
                                Cancel
                            </button>
                            <button onClick={handleLogout} className="py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300">
                                Confirm Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

