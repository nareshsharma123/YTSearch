import React from 'react';
import styles from './VideoItem.module.css';

const parseDescription=(desc)=>{
    const append = desc.length > 50 ? '...' : '';
    return desc.slice(20)+ append;
}
const VideoItem = ({ video, onSelected }) =>{
    const { title, description, channelTitle, thumbnails } = video.snippet;

    let thumbnail = "https://i.stack.imgur.com/WFy1e.jpg";
    if (thumbnails){
        thumbnail= thumbnails.medium.url;
    }

    return (
        <div onClick={()=>{onSelected(video)}} 
            className={styles.VideoItem}>
            <img alt={title} className={styles.thumbnail} src={thumbnail} />
            <div className={styles.data}>
                <p className={styles.title}>{title}</p>
                <div className={styles.metadata}>
                    <p className={styles.channel}>
                        {channelTitle}
                    </p>
                    <p className={styles.description}>
                        {parseDescription(description)}
                    </p>
                </div>
            </div>
        </div>
    );
}


export default VideoItem;