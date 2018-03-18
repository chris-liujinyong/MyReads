import React from 'react'
import BookCollection from './BookCollection'

class SearchResults extends React.Component {
  render() {
    return (
      <BookCollection
      items={this.props.results}
      clickHandler={this.props.clickHandler}
      collectType="search-books-results"
      />
      )
  }
}

export default SearchResults