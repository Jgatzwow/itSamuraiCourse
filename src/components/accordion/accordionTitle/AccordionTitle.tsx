import React from "react";

type PropsType = {
    title: string,
    callback: () => void
}
const AccordionTitle = (props: PropsType) => {
    const {title,callback} = props;
    return (
        <>
            <h2 onClick={callback}>{title}</h2>
        </>
    )
}

export default AccordionTitle