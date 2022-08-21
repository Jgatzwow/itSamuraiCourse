import React from 'react';
import Star from './star/Star';


type PropsType = {
    value: number
}

const Rating = (props: PropsType) => {
    const {value} = props
    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    )

}

export default Rating