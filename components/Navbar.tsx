
"use client"
// components/Navbar.tsx
import React from 'react';
import { SiNextdotjs, SiTypescript, SiSupabase } from 'react-icons/si'; // Import icons from react-icons

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Story Sphere on the left */}
        <div className="text-purple-500 text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 ease-in-out hover:tracking-wider cursor-pointer mb-2 md:mb-0">
          ✨ Story Sphere ✨
        </div>

        {/* Icons of technologies on the right */}
        <div className="flex items-center space-x-4 md:ml-auto">
          <h2 className='font-semibold hidden md:block'>Built With:</h2>

          {/* Next.js Icon */}
          <SiNextdotjs className="text-2xl text-gray-600 hover:text-purple-500 cursor-pointer" />

          {/* TypeScript Icon */}
          <SiTypescript className="text-2xl text-gray-600 hover:text-purple-500 cursor-pointer" />

          {/* Supabase Icon */}
          <SiSupabase className="text-2xl text-gray-600 hover:text-purple-500 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


