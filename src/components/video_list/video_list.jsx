import React from 'react'
import VideoItem from '../video_item/video_item'
import styles from './video_list.module.css'

export default function VideoList({videos, onVideoClick, display}) {

  return (
    <ul className={styles.video}>
      {videos.map( video => (
       <VideoItem 
        key={video.id} 
        video={video} 
        onVideoClick={onVideoClick} 
        display={display} 
      />  
      ))}
    </ul>
  )
}
