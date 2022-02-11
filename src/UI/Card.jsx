import React from 'react'
// import classss from '../UI/card.module.css'
const Card=(props)=>{
    return (
        <div className="card">
            {props.children}
        </div>
    )
}
export default Card