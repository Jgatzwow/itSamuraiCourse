import React from 'react';

type PropsType = {
    selected: boolean
    callback: () => void
}

const Star = (props: PropsType) => {
    const {selected, callback} = props

    return (
        selected
            ? <span onClick={callback}> <b>star </b></span>
            : <span onClick={callback}> star</span>
    )

}

export default Star