import React from 'react';
import styles from './VideoDetail.module.css';

class VideoDetail extends React.Component{

    render(){
        if(!this.props.video){
            return null;
        }
        const videoUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
        return (
            <div className={styles.container}>
                <iframe ref={this.iframeRef} className={styles.iframe} src={videoUrl} />
                <div className={styles.videoData}>
                    <a className={styles.title} target="_blank" href={`https://youtube.com/watch?v=${this.props.video.id.videoId}`}>
                        {this.props.video.snippet.title}
                    </a>
                    <a className={styles.channelName} target="_blank" href={`https://youtube.com/channel/${this.props.video.snippet.channelId}`}>
                        {this.props.video.snippet.channelTitle}
                    </a>
                    <p className={styles.description}>
                        {this.props.video.snippet.description}
                    </p>
                </div>
            </div>
        );
    }
}

export default VideoDetail;