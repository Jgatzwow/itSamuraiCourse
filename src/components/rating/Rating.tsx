import React, {useState} from 'react';
import Star from './star/Star';


type PropsType = {
    value: number
}

const Rating = (props: PropsType) => {

    const [value, setValue] = useState(0)

    const rateApp = (value: number) => {
        setValue(value)
    }
    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => rateApp(1)}>1</button>

            <Star selected={value > 1}/>
            <button onClick={() => rateApp(2)}>2</button>

            <Star selected={value > 2}/>
            <button onClick={() => rateApp(3)}>3</button>

            <Star selected={value > 3}/>
            <button onClick={() => {rateApp(4)}}>4</button>

            <Star selected={value > 4}/>
            <button onClick={() => {rateApp(5)}}>5</button>

        </div>
    )

}

export default Rating