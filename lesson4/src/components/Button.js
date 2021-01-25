// import React from 'react'
// import './Button.css'

// const Button = (props) => (
//     <button className={`btn btn-${props.buttonType}`}>
//         {props.label}
//     </button>
// )

// export const ButtonV2 = (props) => (
//     <button className={`btn btn-${props.buttonType}`}>
//         {props.children}
//     </button>
// )

// export default Button



import React from 'react'
import './Button.css'

const Button = (props) => {
    // <button class="btn btn-primary">label</button>
    return <button className={`btn btn-${props.buttonType}`}>
        {props.label}
    </button>
}

export const ButtonV2 = (props) => {
    return <button className={`btn btn-${props.buttonType}`}>
        {props.children}
    </button>
}

export default Button


























