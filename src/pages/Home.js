import React from 'react';

export default function Home() {
    return (
        <>
            <div className="flex">
                <div className="flex-1 p-4 bg-blue-200 border-r border-gray-300 font-mono">
                    <h1 className="text-3xl font-bold mb-4 font-mono">Solve</h1>
                    <p>Harbor is a project to translate text validated by humans</p>
                </div>
                <div className="flex-1 p-4 bg-blue-200 font-mono">
                    <h1 className="text-3xl font-bold mb-4 font-mono">Publish</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                </div>
            </div>
            <div>
                <header >
                    More info here
                </header>
            </div>
        </>
        
    );
}