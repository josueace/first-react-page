import React, { Component } from "react";


import "./App.css";
import Image1 from 'react-svg-loader!../public/images/ironhack-logo.svg';
import Image2 from 'react-svg-loader!../public/images/menu-top.svg';
import Image3 from 'react-svg-loader!../public/images/react-logo.svg';

class App extends Component {

  render() {


    const header=(
<div>
    <nav>
    <Image1 className="iron" width={50} height={50}></Image1>
    <Image2 className="menu" width={50} height={50}></Image2>
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
        <Image3 className="react" width={500} height={400}></Image3>
        <Image3 className="react2" width={500} height={400}></Image3>
        <Image3 className="react3" width={500} height={400}></Image3>
        <Image3 className="react4" width={500} height={400}></Image3>
        <Image3 className="react5" width={500} height={400}></Image3>
        </div>
    );


    


    return (
      <div className="App">
          {react}
          {header}
           {section1}
           {section2}
      </div>
    );
  }
}

export default App;