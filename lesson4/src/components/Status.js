// import React from 'react';

// //=============Conditional rendering==============
// const Online = () => <h1>online</h1>
// const Offline = () => <h1>offline</h1>

// //==== equals to =======
// // const Online = () => {
// //   return <h1>online</h1>
// // }

// const Status = ({ isOnline }) => {
//   // option1
//   // if (isOnline) {
//   //   return <Online />;
//   // } else {
//   //   return <Offline />
//   // }

//   // option 2
//   // return isOnline ? <Online /> : <Offline />;
  
//   // option 3
//   return <>
//     {isOnline && <Online />}
//     {!isOnline && <Offline />}
//   </>
// }

// const Button = (props) => (
//   <button className={`btn btn-${ props.type }`}>
//     {/* {props.label} */}
//     {props.children}
//   </button>
// )

// export default Status;  



// // use Button
// {/* <JRButton type="primary" label="submit" /> */}
// // <Button buttonType="primary" label={<h1>Hello</h1>} />
//   // <Button type = "primary" label = "submit" >
//   //   <span>hellow</span>
//   //   <span>world</span>
//   // </Button>
  


import React from 'react'
// show online or offline based on isOnline property

// option 1
// function Status(props) {
//   return <h1>{props.isOnline ? 'Online' : 'Offline'}</h1>
// }

// option 2
// const Status = ({ isOnline }) => {
//   // const { isOnline } = props
//   // const isOnline = props.isOnline

//   if(isOnline) {
//     return <h1>Online</h1>
//   }

//   return <h1>Offline</h1> // JSX
// }

// options 3
const Status = ({ isOnline }) => {
  // react fragment
  return <>
    {isOnline && <h1>Online</h1>}
    {!isOnline && <h1>Offline</h1>}
  </>
}

export default Status



























