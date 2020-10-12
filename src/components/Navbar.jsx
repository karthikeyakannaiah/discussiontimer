import React, { Component } from "react";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
        <a className="navbar-brand text text-light">Discussion Timer</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <h6 class="dropdown-header">Project by</h6>
                <a class="dropdown-item text">
                  team<b className="text text-primary">Achiever</b>
                </a>
                <div class="dropdown-divider"></div>
                <h6 class="dropdown-header">Contributed by</h6>
                <a
                  class="dropdown-item text text-primary"
                  href="https://www.linkedin.com/in/karthikeya-kannaiah-052176194"
                >
                  Karthikeya
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
