import React from 'react'

export default function DetailsThumb({image, setIndex}) {
    return (
        <div className="thumb">
            {
                image.map((img, index)=>(
                    <img src={img} alt="" key={index} 
                    onClick={() => setIndex(index)} />
                ))
            }
        </div>
    )
}