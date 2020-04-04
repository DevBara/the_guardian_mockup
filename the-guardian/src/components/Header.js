import React from 'react'
import NavBar from './NavBar'

class Header extends React.Component {
    render(){
        return (
            
            <header className="header">
                <div>
                    <h1>Support the Guardian</h1>
                    <h2>Support the journalism with a year-end gift</h2>
                </div>

                <NavBar />
            </header>
           
                
            
        )
       
    }
    
}




export default Header