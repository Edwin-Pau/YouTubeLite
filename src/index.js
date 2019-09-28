import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

// Google YouTube data api key.
const API_KEY = 'AIzaSyBl4-1wNX2wYkGx2w-smuTQDx2BO-QGXBA'

// Create a new component. This component should produce some HTML.
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {};

        YTSearch({key: API_KEY, term: 'badminton'}, (data) => {
            this.setState({ videos: data })
        })
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )    
    }
}

// Take this component's generated HTMl and put it on the page (in the DOM).
// Wrap in JSX tag to instantiate the component.
// Must find the root element (container).
ReactDOM.render(<App />, document.querySelector('.container'))