import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar.jsx";
import DisTimer from "./components/Timer.jsx";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar onSet={this.handleSetRules} />
        <br />
        <main className="container">
          <DisTimer
            
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
