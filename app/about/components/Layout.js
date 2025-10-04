import React from "react";


export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-black text-black">

            <header className="w-full flex items-center bg-blue-200/40">
                <h1 className="">The Ballad Broken of the Shield</h1>
            </header>

            <main className="flex-1 p-6">
                {children}
            </main>


            <footer className="bg-gray-200/40 text-white text-center p-4">
                © 2025 Story Framework
            </footer>
        </div>

    );
}
