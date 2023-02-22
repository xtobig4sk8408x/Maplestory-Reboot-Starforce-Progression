import React from 'react'

function Search({search, setSearch}) {
    return (
        <div className='search-bar'>
            <input value={search} type="text" placeholder="Search database" onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

export default Search;
