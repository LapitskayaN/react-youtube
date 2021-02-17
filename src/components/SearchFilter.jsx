import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchFilter = ({handleSort}) => {

  return (
    <div className="searchBar">
      <IconButton type="submit" aria-label="search" className='search-icon'>
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => {
          handleSort(e.target.value)
        }}
      />
    </div>
  )
};

export default SearchFilter;