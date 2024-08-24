import React from 'react'

function Input(props) {
    const {image, type, placeholder, value, onChange} = props
    return (
        <div className="input_container">
            <img className="input_image" src={image} alt="input image"/>
            <input
                className="input_field"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input