import React from 'react'
import NavBar from './NavBar'
import GuardianLogo from './GuardianLogo'

class Header extends React.Component {
    render(){
        return (
            
            <header className="header">
                <div>
                    <h1 className="support">Support the Guardian</h1>
                    <h2 className="gift">Available for everyone, funded by readers</h2>
                    <button>Contribute</button>
                    
                </div>
                <div>
                    <NavBar className="nav"/>
                    <GuardianLogo className="logo" />
                </div>

              
               
            </header>
           
                
            
        )
       
    }
    
}




export default Header