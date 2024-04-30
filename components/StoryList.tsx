import React from "react";
import Story from "./Story";

interface StoryListProps{
    stories:{
        id:number;
        title:string;
        content:string;

    }[];
    onEdit:(
        editedStory:{
            id:number;
            title:string;
            content:string;
        }
    ) => void;
}

const StoryList: React.FC<StoryListProps> = ({stories, onEdit}) =>{
    return(
        <>
       <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl mt-8 text-purple-500">
  List Of Stories
</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {stories.map((story) => (
          <Story key={story.id} story={story} onEdit={onEdit} />
        ))}
      </div>
            </>
    );
};

export default StoryList;