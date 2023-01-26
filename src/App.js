//connect to firebase in nodejs?


import React, { Component } from 'react'
import "./App.css"
class App extends Component {

    state = {
        Name: "PRIYANKA VERMA"

    };


    render() {
        return (
            <div className="App">
                <div className="Meta">
                    <h1> Certificates</h1>
                    <p>Enter your name</p>
                    <input type="text" placeholder="enter your name" value={this.state.Name}
                        onChange={e => {
                            this.setState({ Name: e.target.value });
                        }}
                    />
                </div>
                <div id="certificateWrapper">
                    <p>{this.state.Name}</p>
                    <img src="https://i.imgur.com/ijBTqRjh.png" alt="certificate" />
                </div>
            </div>
        )
    }
}

export default App;