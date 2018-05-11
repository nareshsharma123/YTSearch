import React from 'react';
import styles from './VideoItem.module.css';

const parseDescription=(desc)=>{
    const append = desc.length > 50 ? '...' : '';
    return desc.slice(20)+ append;
}
const VideoItem = ({ video, onSelected }) =>{

    return (
        <div onClick={()=>{onSelected(video)}} 
            className={styles.VideoItem}>
            <img className={styles.thumbnail} src={video.snippet.thumbnails.medium.url} />
            <div className={styles.data}>
                <p className={styles.title}>{video.snippet.title}</p>
                <div className={styles.metadata}>
                    <p className={styles.channel}>
                        {video.snippet.channelTitle}
                    </p>
                    <p className={styles.description}>
                        {parseDescription(video.snippet.description)}
                    </p>
                </div>
            </div>
        </div>
    );
}


export default VideoItem;