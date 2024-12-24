import React from 'react';
import Link from 'next/link';

const HeaderComponent: React.FC = () => {
    return (
        <header className=" p-4">
            <nav className="container mx-auto">
                <ul className="flex justify-around">
                    <li>
                        <Link href="/">
                            <h1 className="text-gray-600 hover:bg-red-200  p-2 rounded-lg ">Home</h1>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <h1 className="text-white hover:text-gray-400">About</h1>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <h1 className="text-white hover:text-gray-400">Contact Us</h1>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;
