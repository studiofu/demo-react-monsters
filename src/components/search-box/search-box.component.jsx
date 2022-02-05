import React from 'react'
import './search-box.styles.css';

// functional component
//export const SearchBox = props => (
export const SearchBox = ({placeholder, handleChange}) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder} // placeholder={props.placeholder} <= if using props
        onChange={handleChange} // onChange={props.handleChange}
    />
)