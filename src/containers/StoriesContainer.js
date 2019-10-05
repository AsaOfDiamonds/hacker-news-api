import React, { useEffect, useState } from 'react';
import { getStoryIds } from "../services/hnApi";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  
  useEffect(() => {
    // data here can be called anything like lemons or bananas
    getStoryIds().then(data => setStoryIds(data));
  }, []);
  
  // in reference to the empty array above
  // [] = when the component mounts, do this...
  // if had variable storyIdsUpdate
  // [storyIdsUpdated (true/false)]
  // what ever is put in [] is telling it to watch the variable and then rerender
  // if nothing is put in there it will only render once
  
  return (
  <p>{JSON.stringify(storyIds)}</p>
  )
  };
  