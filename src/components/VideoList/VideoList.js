import React from 'react';
import VideoItem from './VideoItem/VideoItem';
import styles from './VideoList.module.css';

const VideoList = ({ videos, onSelected, searchTerm }) =>{

    if (!searchTerm) {
        return null;
    }
    const renderedList = videos.map(video=>{
        return (
            <div key={video.id.videoId}>
                <VideoItem onSelected={onSelected} video={video} />
            </div>
        )
    });
    return (
        <div className={styles.container}>
            <p>
                Video results for: {searchTerm}
            </p>
            {renderedList}   
        </div>
    );
}

export default VideoList;