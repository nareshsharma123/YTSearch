import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './App.module.css';
import youtube from '../../youtube';
import VideoList from '../../components/VideoList/VideoList';
import VideoDetail from '../../components/VideoDetail/VideoDetail';

class App extends React.Component{
    state={
        videos:[],
        selectedVideo: null,
        searchTerm:'',
	searching: false
    }
    handleSubmit= async (term)=>{
	this.setState({searching: true});
        const res = await youtube.get('/search',{
            params: {
                q: term
            }
        });
        try {
            this.setState({videos: res.data.items, searchTerm: term, error: ''});
            window.scrollTo(0, 0);
	    window.location.href="#";
	    window.location.href="#videolist";
        } catch(err){
            this.setState({ error: 'Server error. Maybe the quota for today ended.' })
        }
	this.setState({searching: false});
    }

    onSelected = (video)=>{
        this.setState({selectedVideo: video});
        window.scrollTo(0, 0);
    }

    render(){
        const github = "https://github.com/nareshbhusal";
        const { error, selectedVideo, searchTerm, videos, searching } = this.state;
        return (
            <div className={styles.App}>
                <SearchBar className={styles.searchBar} onFormSubmit={this.handleSubmit}/>
                <VideoDetail video={selectedVideo} />
                {error ? 
                <p style={{color: 'red'}}>{error}</p> :
                <VideoList 
                    searchTerm={searchTerm}
                    searching={searching}
                    onSelected={this.onSelected} 
                    videos={videos} />
                }
		//<a href="javascript:window.Metomic('ConsentManager:show')">manage cookies</a>
                <footer className={styles.footer}>
                    <p className={styles.footerText}>
                        Built with YouTube api.
                        © All rights reserved - <a href={github}>Naresh Bhusal</a>
                    </p>
                </footer>
            </div>
        );
    }
}

export default App;
