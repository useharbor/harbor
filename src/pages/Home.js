import React from 'react';

export default function Home() {
    return (
        <div className="flex justify-between p-4">
            <div className="flex-1 mr-2 p-4 border-r-2">
                <h1 className="text-2xl font-bold mb-4">Solve</h1>
                <p>Harbor is a project to translate text validated by humans</p>
            </div>
            <div className="flex-1 ml-2 p-4">
                <h1 className="text-2xl font-bold mb-4">Publish</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
        </div>
    );
}