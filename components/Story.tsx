"use client";
// 
import React, { ChangeEvent, useState } from "react";

interface StoryProps {
  story: {
    id: number;
    title: string;
    content: string;
  };
  onEdit: (editedStory: {
    id: number;
    title: string;
    content: string;
  }) => void;
}

const Story: React.FC<StoryProps> = ({ story, onEdit }) => {
  const [editedStory, setEditedStory] = useState(story);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    onEdit(editedStory);
    setIsEditing(false); // Reset editing state after saving
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditedStory({ ...editedStory, content: e.target.value });
  };

  return (
    <div className={`relative bg-gray-100 bg-opacity-${isEditing ? '75' : '50'} p-6 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:bg-blur mx-4 mt-8`}>

  <div className="relative z-10 text-black">
    <div className="mb-4">
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">{story.title}</h2>

      {/* Display the <p> tag without a background only when not editing */}
      {!isEditing && (
        <p className="font-light text-gray-800 text-base md:text-lg lg:text-xl overflow-hidden overflow-ellipsis whitespace-nowrap">
        {story.content}
      </p>
      
      )}
    </div>

    {/* Display textarea and button only when editing */}
    {isEditing && (
      <>
        <textarea
          className="resize-none border rounded-md p-2 mb-4 w-full h-40 md:h-48 lg:h-56 focus:ring-4  "
          value={editedStory.content}
          onChange={handleContentChange}
          placeholder="Type your story here..."
        />
        <button className="bg-gray-700 hover:bg-gray-900 text-white font-normal py-2 px-6 rounded-full transition duration-300" onClick={handleEdit}>
          Save Edit
        </button>
      </>
    )}

    {/* Button to trigger editing */}
    {!isEditing && (
      <button className="bg-gray-700 hover:bg-gray-900 text-white font-normal py-2 px-6 rounded-full transition duration-300" onClick={() => setIsEditing(true)}>
        Continue  ... 
      </button>
    )}
  </div>
</div>

  );
};




// Export the Story component as the default export of the file
export default Story;
