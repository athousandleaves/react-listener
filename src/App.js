import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="pusher">
          <div className="ui vertical masthead center aligned segment">
            <div>
              <h1 className="ui huge header" id="header">
                Listener
              </h1>
            </div>
            <div className="ui text container">
              <h4 id="h4">
                Search for an artist to view their top tracks
                <i className="angle down icon" />
              </h4>
            </div>
            <div className="ui container raised">
              <div className="ui icon input raised">
                <input
                  className="text"
                  placeholder="Type artist name.."
                  id="input"
                  autocomplete="off"
                  autofocus
                />
                <i className="search link icon" id="search" />
              </div>
            </div>
          </div>
          <div id="songlist"></div>
        </div>
      </div>
    );
  }
}

export default App;
