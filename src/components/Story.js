import React, {useState, useEffect} from "react";
import { getStory } from "../services/hnApi";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId)
    .then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    //JSON.stringify(story)
    // comment out code below inc the fragments and uncomment line above
    // to see the json object coming back
    <>
    <a href={story.url}><p>{story.title}</p></a>
    By: <p>{story.by}</p>
    Posted: <p>{story.time}</p>
    </>
  ) : null;
 
}