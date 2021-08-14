import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeHolder, handleChange}) => {

    return (<input type='search' className='search' placeholder={placeHolder} 
    onChange = {handleChange} />)

    {/*event => this.setState({searchField: event.target.value}) */}

};