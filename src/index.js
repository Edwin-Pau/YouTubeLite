import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// Google YouTube data api key.
const API_KEY = 'AIzaSyBl4-1wNX2wYkGx2w-smuTQDx2BO-QGXBA'

// Create a new component. This component should produce some HTML.
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: []};

        YTSearch({key: API_KEY, term: 'badminton'}, (videos) => {
            this.setState({ videos })
        })
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video = {this.state.videos[0]}/>
                <VideoList videos = {this.state.videos} />
            </div>
        )    
    }
}

// Take this component's generated HTMl and put it on the page (in the DOM).
// Wrap in JSX tag to instantiate the component.
// Must find the root element (container).
ReactDOM.render(<App />, document.querySelector('.container'))