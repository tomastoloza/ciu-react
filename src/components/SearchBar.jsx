import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ButtonIcon from "./ButtonIcon";

const SearchBar = (action) => {
    return (
        <div className="searchBar">
            <input onChange={action} type="text"/>
            <ButtonIcon icon={<SearchOutlinedIcon/>}/>
        </div>
    );
};

export default SearchBar;
