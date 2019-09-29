import React, { Component } from 'react'

// Class-based component vs function-based component. Must always define a render method.
class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { searchterm: '' }
    }

    render() {
        // "onChange is a REACT property"
        // Always use setState to manipulate state
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.searchterm}
                    onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(searchTerm) {
        this.setState({searchterm: searchTerm})
        this.props.onSearchTermChange(searchTerm)
    }
}

// Exports the SearchBar component.
export default SearchBar