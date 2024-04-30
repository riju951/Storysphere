// Import necessary functions and types from the Supabase JavaScript library
import { createClient, PostgrestResponse, PostgrestSingleResponse } from "@supabase/supabase-js";

// Retrieve Supabase URL and API Key from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Check if Supabase URL or API Key is missing and throw an error if so
if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or API Key is missing');
}

// Create a Supabase client using the retrieved URL and API Key
const supabase = createClient(supabaseUrl, supabaseKey);

// Define the structure of a Story using TypeScript interface
interface Story {
    id: number;
    title: string;
    content: string;
} 

// Async function to fetch stories from the "stories" table in Supabase
export const getStories = async (): Promise<Story[] | null> => {
    // Make a request to select all columns from the "stories" table
    const { data, error }: PostgrestResponse<Story> = await supabase.from('stories').select('*');

    // If an error occurs during the request, throw the error
    if (error) {
        throw error;
    }

    // Return the fetched data (an array of stories) or null if there's no data
    return data;
};

// Async function to update a story's content in the "stories" table in Supabase
export const updateStory = async (
    id: number,
    newStory: Partial<Story>
): Promise<PostgrestSingleResponse<Story | null>> => {
    // Make a request to Supabase to update the content of a story based on its ID
    const { data, error, count, status, statusText } = await supabase
        .from("stories")
        .update({ content: newStory.content })
        .eq("id", id);

    // If an error occurs during the request, throw the error
    if (error) {
        throw error;
    }

    // Return an object containing the updated data (story) or null if there's no data,
    // along with other response properties such as count, status, and statusText
    return { data: data as Story | null, error, count, status, statusText };
};
