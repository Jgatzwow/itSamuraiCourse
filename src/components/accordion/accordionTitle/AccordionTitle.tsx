import React from "react";

type PropsType = {
    title: string,
}
const AccordionTitle = (props: PropsType) => {
    const {title} = props;
    return (
        <>
            <h2>{title}</h2>
        </>
    )
}

export default AccordionTitle