import React from 'react';

const Footer = () => {
  return (
    <>
        <footer className="bg-cobalt-blue text-white p-4 flex justify-between items-start">
            {/* Left container for text */}
            <div className="flex flex-col items-start space-y-4 font-bold">
                <p className="mb-4">TartanHacks 2024</p>
            </div>

            {/* Center container for links */}
            <div className="mx-4 flex items-start space-x-4">
                <a href="#" className="font-bold text-white">Github</a>
                <p>|</p>
                <a href="#" className="font-bold text-white">Deck</a>
            </div>

            {/* Right container for list */}
            <div className="text-right ml-4">
                <ul className="text-left">
                    <li className="font-bold">Built By</li>
                    <li>Yerim Song</li>
                    <li>Joey Wang</li>
                    <li>Lucas Zheng</li>
                    <li>Michael Zhou</li>
                </ul>
            </div>
        </footer>
        <div className='bg-cobalt-blue p-2'></div>
        <div className='bg-white p-0.5'></div>
        <div className='bg-cobalt-blue p-2'></div>
        <div className='bg-white p-1'></div>
        <div className='bg-cobalt-blue p-2'></div>
        <div className='bg-white p-1.5'></div>
        <div className='bg-cobalt-blue p-2'></div>
        <div className='bg-white p-2'></div>
        <div className='bg-cobalt-blue p-2'></div>
        <div className='bg-white p-2.5'></div>
        <div className='bg-cobalt-blue p-2'></div>
        <div className='bg-white p-3'></div>
        <div className='bg-cobalt-blue p-2'></div>
        <div className='bg-white p-3.5'></div>
        <div className='bg-cobalt-blue p-2'></div>
    </>
  );
}

export default Footer;