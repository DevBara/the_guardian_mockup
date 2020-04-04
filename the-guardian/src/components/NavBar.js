import React from 'react'
import SearchIcon from './SearchIcon'

function NavBar(){
    return(
        <nav>
            <ul>
                <li>Search Jobs | </li>
                <li> Sign In | </li>
                <li> <SearchIcon />  Search </li>
            </ul>
        </nav>

    )
    

}

export default NavBar