import React from 'react';

export default function Solver_Profile() {
    return (
        <>
            <div className="p-12">
                <h1 className="text-[40px] mb-2 font-semibold">User Profile</h1>
                <div className="text-[20px] italic font-semibold text-cobalt-blue mb-8">
                    Publisher Account
                </div>
                <div className="mb-10 font-bold text-[20px]">
                    <ul>
                        <li className="mb-4">Name: </li>
                        <li className="mb-4">Username: </li>
                        <li className="mb-4">Email: </li>
                    </ul>
                </div>
                <div className="mb-8 font-bold text-[20px]">
                    Requested Jobs:
                </div>
                <div className="mb-8 font-bold text-[20px]">
                    Past Jobs:
                </div>
            </div>
        </>
    );
}