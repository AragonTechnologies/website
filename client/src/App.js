import './App.css';
import React, { Component } from 'react';
import Aux from "./hoc/aux"
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection"
import About from "./components/About"
import Team from "./components/Team"
import Community from "./components/Community"
import Footer from "./components/Footer"
export default class App extends Component {
  render() {
    return (

      <Aux>
      <Header />
      <WelcomeSection />
      <About />
      <Team />
      <Community />
      <Footer />
      </Aux>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
