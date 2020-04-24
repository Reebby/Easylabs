import React, {Component} from 'react';
export default class ScrollButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDownButton: false,
            displayUpButton: false,
            scrollPosition:0
      }
        
    }

    render() {
        return(
            <div>

  <section id="section07" className="demo">
    <h1>Scroll Down Button #7</h1>
    <a href="#section08"><span /><span /><span />Scroll</a>
  </section>
  <section id="section08" className="demo">
    <h1>Scroll Down Button #8</h1>
    <a href="#section09"><span />Scroll</a>
  </section>
  <section id="section09" className="demo">
    <h1>Scroll Down Button #9</h1>
    <a href="#section10"><span />Scroll</a>
  </section>
  <section id="section10" className="demo">
    <h1>Scroll Down Button #10</h1>
    <a href="#thanks"><span />Scroll</a>
  </section>
  <section id="thanks">
    <div>
      <h2>Thanks!</h2>
      <p><a href="https://www.nxworld.net/tips/css-scroll-down-button.html" target="_parent">&lt; Back To Article</a></p>
    </div>
  </section>s
</div>

        )
    }
}
