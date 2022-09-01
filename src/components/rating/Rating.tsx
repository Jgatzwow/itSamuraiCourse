import React, {useState} from 'react';
import Star from './star/Star';


const Rating = () => {

    const [value, setValue] = useState(0)

    const rateAppHandler = (value:number) => {
        setValue(value)
    }

    return (
        <div>
            <Star callback={() => rateAppHandler(1)} selected={value > 0}/>

            <Star callback={() => rateAppHandler(2)} selected={value > 1}/>


            <Star callback={() => rateAppHandler(3)} selected={value > 2}/>


            <Star callback={() => rateAppHandler(4)} selected={value > 3}/>

            <Star callback={() => rateAppHandler(5)} selected={value > 4}/>

        </div>
    )

}

export default Rating