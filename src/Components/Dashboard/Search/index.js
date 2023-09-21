import React from "react"
import "./style.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function Search({ search, onSearchChange }) {

    return (
        <div className="search-flex">
            <SearchRoundedIcon />
            <input type="text" value={search} placeholder="Search" onChange={(e) => onSearchChange(e.target.value)} />
        </div>
    )
}