import React from 'react';
import styles from './SearchBar.module.css';


class SearchBar extends React.Component{
    state={
        searchValue:''
    }
    searchHandler=(e)=>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.searchValue);
    }
    clearSearch=()=>{
        this.setState({searchValue:''});
    }

    onChangeHandler=(e)=>{
        this.setState({searchValue: e.target.value});
    }
    
    render(){
        return (
            <div className={styles.container}>
                <div className={styles.logo} onClick={(e) => window.location.href="/"}>
                    VideoSearch
                </div>
                <form onSubmit={this.searchHandler} className={styles.form}>
                    <input 
                    placeholder="Search"
                    className={styles.input}
                    type='text' 
                    onChange={this.onChangeHandler}
                    value={this.state.searchValue} />
                </form>
            </div>
        );
    }
}

export default SearchBar;