import React from 'react'
import Proptypes from 'prop-types'

const Button = (props) => {
    

    return (
        <div>
            <button onClick={props.onClick}
            style={{backgroundColor:props.color}}
            className='btn'>{props.text}</button>
        </div>
    )
}

Button.defaultProps = {
    color:'steelblue'
}

Button.propTypes = {
    text: Proptypes.string,
    color: Proptypes.string,
    onClick: Proptypes.func,
}
export default Button
