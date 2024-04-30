"use client"

import { getStories, updateStory } from "@/services/storyServices";
import React, { useEffect, useState } from "react";

import StoryList from "@/components/StoryList";

import AddStory from "./AddStory";
const Hero: React.FC = () =>{
  const [stories,setStories] = useState<{
    id:number;
  title:string;
content:string;
}[]>([]);


useEffect(() => {
 
  fetchStories();
},[]);
const fetchStories = async() =>{
    try{
      const storiesData = await getStories();
      setStories(storiesData||[]);
    } catch(error : any){
      console.error("Fetched Error: ", error.message);
    }
  };
const handleAdd = () => {
    // Refresh the story list after adding a new story
    fetchStories();
  };

const handleEdit = async(editedStory:{
  id:number;
  title:string;
  content:string;
}) => {
  const updatedStories = stories.map((s)=> s.id === editedStory.id ? editedStory : s);
  setStories(updatedStories);

  try{
    await updateStory(editedStory.id, editedStory);
  } catch(error : any){
    console.error("Error updating story:", error.message);
  }
};

return (

  <div className="flex flex-col min-h-screen">
  <div className="py-20 relative flex flex-col items-center justify-center w-full h-fit bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600">
    {/* Content */}
    <div className="relative z-10 text-white flex flex-col items-center justify-center">
      <h1 className="mt-6 mb-2 text-3xl md:text-4xl  font-normal text-center"><strong>Story Sphere:</strong> Interactive Storytelling App</h1>
      <h2 className="font-semibold my-2  text-xl text-center"> Build an amazing story with strangers together.</h2>
      <p className=" mx-4 md:mx-16 lg:mx-64 mb-8 text-center font-extralight ">Craft a unique narrative by collaborating with individuals from diverse backgrounds. Let your imagination run wild as you weave a tale together, creating connections and memories that last a lifetime.</p>
      <AddStory onAdd={handleAdd}/>
    </div>
    
</div>

<StoryList stories={stories} onEdit={handleEdit} />
</div>


 



);

}

export default Hero;