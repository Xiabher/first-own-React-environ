import * as React from 'react';
import './style.css';
import Header from "./Header"
import MainContent from './MainContent'

export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}







function Footer() {
  return (
      <footer>
          <small>© 2023 Xiabher develops. All rights reserved.</small>
      </footer>
  )
}