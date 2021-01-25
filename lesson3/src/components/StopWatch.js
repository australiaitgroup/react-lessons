// import React from 'react';

// class StopWatch extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       time: 0,
//       isRunning: false,
//     };
//   }

//   handleStart = () => {
//     console.log('clicked start');
//     // reset time to 0
//     this.setState({
//       time: 0,
//     });

//     // increase time by 1 every single millisecond
//     this.timer = setInterval(() => {
//       // increase time by one
//       this.setState({
//         time: this.state.time + 1,
//         isRunning: true,
//       });
//     }, 1)
//   }

//   handleStop = () => {
//     // stop time change
//     clearInterval(this.timer);

//     this.setState({
//       isRunning: false,
//     })
//   }

//   render() {
//     return (
//       <div>
//         {this.state.time}
//         <button
//           onClick={this.handleStart}
//           disabled={this.state.isRunning}>start</button>
//         <button onClick={this.handleStop}>stop</button>
//       </div>
//     )
//   }
// }

// export default StopWatch;








// stop watch to do list
// #1. seconds + 1
// #2. start button
// #3. stop button

import React from 'react'

class StopWatch extends React.Component {
  constructor() {
    super()
    this.state = {
      seconds: 0,
      isRunning: false,
    }
    // this.start = this.start.bind(this)
    // this.stop = this.stop.bind(this)
  }

  start = () => {
    this.setState({
      seconds: 0,
      isRunning: true,
    })

    this.timer = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1
      })
    }, 1)
  }

  stop = () => {
    this.setState({
      isRunning: false,
    })

    clearInterval(this.timer)
  }

  render() {
    return <>
      <h1>{this.state.seconds}</h1>
      <button
        disabled={this.state.isRunning}
        onClick={this.start}>
        start
      </button>
      <button onClick={this.stop}>stop</button>
    </>
  }
}

export default StopWatch