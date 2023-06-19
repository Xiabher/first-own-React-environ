
import * as React from 'react';

export default function Header() {
  return (
      <header>
          <nav className = "nav">
          <ul className="nav-items">
            <img src = "./react-logo.png" className ="nav-logo"/>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
             
              
          </nav>
      </header>
  )
}

//export default Header