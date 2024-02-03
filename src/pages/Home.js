import React from 'react';
import Footer from '../components/footer';

export default function Home() {
    return (
        <>
            <div className="flex">
                <div className="flex-1 p-4 bg-cobalt-blue text-white border-r border-white">
                    <h1 className="text-3xl font-bold mb-4">Solve</h1>
                    <p>Harbor is a project to translate text validated by humans</p>
                </div>
                <div className="flex-1 p-4 bg-cobalt-blue text-white">
                    <h1 className="text-3xl font-bold mb-4">Publish</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                </div>
            </div>
            <div>
                <header >
                    More info here
                </header>
            </div>
            <Footer></Footer>
        </>
    );
}