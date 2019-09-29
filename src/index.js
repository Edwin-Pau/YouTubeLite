import _ from 'lodash'
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

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.searchVideo('Tesla')
    }

    searchVideo(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        // Use lodash to throttle search term input, run once every 300 ms
        const searchVideo = _.debounce((term) => { this.searchVideo(term) }, 300)

        // Pass properties to VideoList
        return (
            <div>
                <SearchBar onSearchTermChange = {searchVideo}/>
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos = {this.state.videos} />
            </div>
        )    
    }
}

// Take this component's generated HTMl and put it on the page (in the DOM).
// Wrap in JSX tag to instantiate the component.
// Must find the root element (container).
ReactDOM.render(<App />, document.querySelector('.container'))