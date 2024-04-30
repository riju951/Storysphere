// components/AddStoryForm.tsx
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Check if Supabase URL or API Key is missing and throw an error if so
if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or API Key is missing');
}

// Create a Supabase client using the retrieved URL and API Key
const supabase = createClient(supabaseUrl, supabaseKey);

interface AddStoryFormProps {
  onAdd: () => void;
}

const AddStory: React.FC<AddStoryFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddStory = async () => {
    try {
      if (title && content) {
        const { data, error } = await supabase
          .from("stories")
          .upsert([{ title, content }]);

        if (error) {
          throw error;
        }

        // Clear the form and trigger the parent component to refresh the story list
        setTitle("");
        setContent("");
        onAdd();
      }
    } catch (error : any) {
      console.error("Error adding story:", error.message);
    }
  };

  return (
    <div className="m-6 flex items-center justify-center">
      {/* Set full prop to make it cover the entire page */}
      <div className="bg-white rounded-md p-8">
        <h2 className="text-black text-2xl font-bold mb-4">Add New Story</h2>
        <form>
          <label className="text-black mb-4 block">
            Title:
            <input
              className="border rounded-md p-2 w-full"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className=" text-black mb-4 block">
            Content:
            <textarea
              className="border rounded-md p-2 w-full"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <button
            className="bg-purple-500 text-white font-semibold rounded-md py-2 px-4"
            type="button"
            onClick={handleAddStory}
          >
            Add Story
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStory;
