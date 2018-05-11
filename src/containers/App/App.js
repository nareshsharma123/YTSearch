import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './App.module.css';
import youtube from '../../components/api/youtube';
import VideoList from '../../components/VideoList/VideoList';
import VideoDetail from '../../components/VideoDetail/VideoDetail';


class App extends React.Component{
    state={
        videos:[],
        selectedVideo: null,
        searchTerm:''
    }
    handleSubmit= async (term)=>{
        const res = await youtube.get('/search',{
            params: {
                q: term
            }
        });
        this.setState({videos: res.data.items, searchTerm: term});
        window.scrollTo(0, 0);
    }

    onSelected = (video)=>{
        this.setState({selectedVideo: video});
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div className={styles.App}>
                <SearchBar className={styles.searchBar} onFormSubmit={this.handleSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    searchTerm={this.state.searchTerm}
                    onSelected={this.onSelected} 
                    videos={this.state.videos} />
                <footer className={styles.footer}>
                    <p className={styles.footerText}>
                        Built with YouTube api.
                        © All rights reserved - Naresh Sharma
                    </p>
                </footer>
            </div>
        );
    }
}

export default App;