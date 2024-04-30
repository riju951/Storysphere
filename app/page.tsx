"use client"

import { getStories, updateStory } from "@/services/storyServices";
import React, { useEffect, useState } from "react";


import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
const Home: React.FC = () =>{
  

return (
<div className="flex flex-col min-h-screen">
  <Navbar/>
  <Hero/>
  <footer className="mt-20 py-4 text-center text-black font-semibold">
    Made with <span className="text-pink-500">&hearts;</span> by Rijans
  </footer>
</div>

);

}

export default Home;