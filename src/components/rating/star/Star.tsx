import React from 'react';

type PropsType = {
    selected: boolean
    callback: () => void
}

const Star = (props: PropsType) => {
    const {selected, callback} = props

    return (
        <span onClick={callback}>
        {selected ? <b>star </b> : ' star '}
    </span>
    )

}

export default Star