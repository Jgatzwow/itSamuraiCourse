import React, {useState} from 'react';

type PropsType = {
}


export const OnOff = (props: PropsType) => {
    /*const {on} = props*/
    const [on, setOn] = useState(true)

    const changeStatus = () => {
        setOn(!on)
    }

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer',

        'div:hover': {
            backgroundColor: 'orange',
        }
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: !on ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    }


    return (
        <div>
            <div onClick={changeStatus} style={onStyle}>Onn</div>
            <div onClick={changeStatus} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}