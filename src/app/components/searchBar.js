import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ placeholder = '', value = '', onChange, className = '', ...restProps }) => {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="search by title or description"
                value={value}
                onChange={onChange}
                className="search-bar"
                {...restProps}
            />
            <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    );
};

export default SearchBar;