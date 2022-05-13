import React, { useEffect } from 'react';

export default function SearchList({text, setVideos}) {

  const search = text => {
    // const urlencoded = new URLSearchParams();

    const requestOptions = {
      method: 'GET',
      // body: urlencoded,
      redirect: 'follow'
    };
    console.log('yogida2:', text);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=AIzaSyD0EMyUeFbUeJbCLMcdB0IIvK8IN-yo494`, 
      requestOptions
    )
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  return (
    <div>
      
    </div>
  );
}