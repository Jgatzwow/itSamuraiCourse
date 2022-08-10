import React from "react";

type PropsType = {
    selected: boolean
}

const Star = (props: PropsType) => {
    if (props.selected === true) {
        return <span> <b>star </b></span>
    } else {
        return <span> star</span>
    }

}

export default Star