import React, { useEffect, useState } from 'react';
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import {
   GlobalStyle,
   StoriesContainerWrapper,
   } from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";   

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);
  // const test = useInfiniteScroll();
  
  
  useEffect(() => {
    // console.log('count', count);
    // data here can be called anything like lemons or bananas
    getStoryIds().then(data => setStoryIds(data));
    //if
    // storyIds && storyIds.length>0
    // getStory(21164132)
    // .then(data => console.log(data));
  }, [count]);
  
  // in reference to the empty array above
  // [] = when the component mounts, do this...
  // if had variable storyIdsUpdate
  // [storyIdsUpdated (true/false)]
  // what ever is put in [] is telling it to watch the variable and then rerender
  // if nothing is put in there it will only render once


  
  return (
    // React uses key to check for updates  
    // again storyId could be anything like lemon or banana
    <>
    <GlobalStyle />
    <StoriesContainerWrapper data-test-id="stories-container">
      <h1>Hacker News Stories</h1>  
      {storyIds.slice(0, count).map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </StoriesContainerWrapper> 
  </>
  );
  };
  