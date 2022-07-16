import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
   <button
   type="button"
   style={{ backgroundColor: bgColor, color: color, borderRadius: borderRadius }}
   className= {`text-${size} px-4 py-2 rounded-full hover:drop-shadow-xl`}
   >
    {text}
   </button>
  )
}

export default Button