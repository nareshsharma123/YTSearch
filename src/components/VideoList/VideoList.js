import React from 'react';
import VideoItem from './VideoItem/VideoItem';
import styles from './VideoList.module.css';

const VideoList = ({ videos, onSelected, searchTerm, searching }) =>{
//    console.log(videos[0])
    if (!searchTerm) {
        if (searching) {
	    return <p>Searching...</p>
	}
        return <p>Nothing searched for</p>
    }
    const renderList = videos.map(video=>{
        return (
            <VideoItem key={video.etag} 
            onSelected={onSelected} video={video} />
        );
    });
    if(!renderList.length){
	return <p>No videos for the search criteria</p>
    } 
    return (
        <div id="videolist" className={styles.container}>
            <p>
                Video results for: {searchTerm}
            </p>
            {renderList}   
        </div>
    );
}

export default VideoList;
