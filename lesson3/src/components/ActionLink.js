// import React from 'react';

// class ActionLink extends React.Component {

//   constructor() {
//     super();
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     console.log(e);
//     // prevent default DOM actions, e.g action="someURl" in form element
//     e.preventDefault();
//   }

//   render() {
//     return (
//       <form>
//         <button type="submit" onClick={this.handleClick}>click</button>
//       </form>
//     )
//   }
// }

// export default ActionLink;






// Action LInk to do list
// #1. <button href>link</button>
// #2. handle onClick event in a element

import React from 'react'

class ActionLink extends React.Component {
  constructor() {
    super()
  }
  
  handleClick = (event) => {
    // event is from native js
    event.preventDefault()
    console.log(event)
  }

  render() {
    // single page application
    return <form>
      <button type="submit" onClick={this.handleClick}>link</button>
    </form>
  }
}

export default ActionLink

























