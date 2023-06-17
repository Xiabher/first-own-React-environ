import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function MainContent() {
  return (
      <div>
          <h1>Reasons I'm excited to learn React</h1>
         
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
              <h3>Hello StackBlitz!</h3>
              <p>Start editing to see some magic happen :)</p>
          </ol>
      </div>
  )
}

function Header() {
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



function Footer() {
  return (
      <footer>
          <small>© 2023 Xiabher develops. All rights reserved.</small>
      </footer>
  )
}