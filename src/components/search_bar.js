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
            <div>
                <input 
                    value = {this.state.searchterm}
                    onChange = {event => this.setState({ searchterm: event.target.value })} />
            </div>
        )
    }
}

// Exports the SearchBar component.
export default SearchBar