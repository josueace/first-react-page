import React, { Component } from "react";


import "./App.css";


class App extends Component {

  render() {



const header=(
    <div>
        <nav>
        <img class="iron" src="images/ironhack-logo.svg"></img>
        <img class="menu" src="images/menu-top.svg"></img>
        </nav>
    </div>
        );

    const section1=(
        <div class="section1">
            <h1>Say hello to <br/> ReactJS</h1>
            <p>You will learn a Frontend<br/>framework from scratch, to <br/>become a Ninja Developer.</p>
            <button class="btn">Awesome!</button>

        </div>
    );

    const section2=(
        <div class="section2">
            
        <figure>
            <img src="images/icon1.png" />
            <h3>Declarative</h3>
        <figcaption>React makes it<br/>painless to create<br/>interactive UIs.</figcaption>
        </figure>
        <figure><img src="images/icon2.png" />
        <h3>Components</h3>
        <figcaption>Build encapsulated<br/>components that<br/>manage their state</figcaption>
        </figure>
        <figure><img src="images/icon3.png" />
        <h3>Single-Way</h3>
        <figcaption>A set of immutable<br/>values are passed to<br/>the component's.</figcaption>
        </figure>
        <figure><img src="images/icon4.png" />
        <h3>JSX</h3>
        <figcaption>Statically-typed,<br/>designed to run on<br/>modern browsers.</figcaption>
        </figure>


        </div>
    );

const react=(
    <div>
    <img class="react" src="images/react-logo.svg"></img>
    <img class="react2" src="images/react-logo.svg"></img>
    <img class="react3" src="images/react-logo.svg"></img>
    <img class="react4" src="images/react-logo.svg"></img>
    <img class="react5" src="images/react-logo.svg"></img>
    </div>
);

    


    return (
      <div className="App">
          {header}
          {react}
           {section1}
           {section2}
      </div>
    );
  }
}

export default App;