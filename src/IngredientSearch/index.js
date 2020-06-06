import React, { useState, useRef } from 'react'
import { Row, Col } from 'react-grid-system';
import debounce from 'lodash/debounce'
import resolveIngredientSearch from '../resolvers/ingredient-search'
import ProductList from './ProductList'

export const DEFAULT_INGREDIENT_SEARCH = 'Organic Banana'
export const DEFAULT_PLACEHOLDER_TEXT = 'Hungry for ...'
export const DEFAULT_SIMULATED_NETWORK_DELAY_MILLISECONDS = 100
export const DEFAULT_DEBOUNCE_MILLISECONDS = 300
export const DEFAULT_SEARCH_RESULTS = resolveIngredientSearch(DEFAULT_INGREDIENT_SEARCH)
/**
 * Main component that drives the search
 * holds state for loading, user input, and search results
 * renders and Input and one of:
 *   loading indicator
 *   a no results message
 *   <ProductList /> - React Component responsible for displaying a list of products
 */
function IngredientSearch () {
  const [loading, setLoading] = useState(false)  // initialize loading state to false
  const [searchValue, setSearchValue] = useState(DEFAULT_INGREDIENT_SEARCH)  // initialize searchValue state to a default search term
  const [searchResults, setSearchResults] = useState(DEFAULT_SEARCH_RESULTS) // initialize searchResults default results that were calculated at bootstrap of app
  
  /**
   * following block of code defines a function to be called delayedSearch
   * it wrapped in a debounce so we don't execute the search until the user finishes typing (currently 300ms delay)
   * it also adds an artifical delay of DEFAUL_SIMULATED_NETWORK_DELAY (currently 150 ms) to simulate a call to some remote
   */
  const debouncedSearch = useRef(debounce(async (_searchValue) => {
    await new Promise(resolve => setTimeout(resolve, DEFAULT_SIMULATED_NETWORK_DELAY_MILLISECONDS)) // artificial delay using Promise + setTimeout
    const _searchResults = resolveIngredientSearch(_searchValue) // do the actual search
    setSearchResults(_searchResults) // set the results to react state
    setLoading(false) // set the loading to false
  }, DEFAULT_DEBOUNCE_MILLISECONDS, {trailing: true})).current

  /**
   * change listener for input
   * sets the searchValue state to what the user typed in the input
   * invokes a delayedSearch with the serachValue
   */
  const handleInputChange = (e) => {
    setLoading(true) // setting loading to true here to account for the debounce time as well as simulated network time
    setSearchValue(e.target.value)  // set the searchValue state
    debouncedSearch(e.target.value.trim()) // call our network simulated debouncedSearch with the trimmed input
  }

  /**
   * Builder function that returns loading indicator, or a message indicating no results
   */
  const buildLoadingOrNoResults = () => {
    if (loading) return <div className="Loader"></div> // if we are loading, then return the loader
    if (searchValue && searchResults.length === 0) { // if loading is false, searchValue is defined (the user has entered text), and the result array is 0, then return a "no results" type of messaging
      return (
        <Col>
          <div araia-label='no-result-div' className="SorryMessage">
            <span>{`Sorry! Looks like we are fresh out of`}</span>
            <br></br>
            <span><i>{`"${searchValue}"`}</i></span>
          </div>
        </Col>
      )
    }
  }

  /**
   * Return JSX
   * Tow Rows
   *   - input for search
   *   - loading indicator || "no results message" || <ProductList />
   */
  return (
    <React.Fragment>
      <Row>
        <input aria-label='ingredient-search' className="SearchInput" placeholder={DEFAULT_PLACEHOLDER_TEXT} value={searchValue} type='search' onChange={handleInputChange}></input>
      </Row>
      <Row>
        { 
          loading || searchResults.length === 0 ? buildLoadingOrNoResults() : <ProductList products={searchResults} searchValue={searchValue}/>
        }
      </Row>
    </React.Fragment>
  )
}

export default IngredientSearch