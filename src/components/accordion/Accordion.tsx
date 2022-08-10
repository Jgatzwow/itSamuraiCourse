import React from "react";
import AccordionTitle from "./accordionTitle/AccordionTitle";
import AccordionBody from "./accordionBody/AccordionBody";

type PropsType = {
    title: string
    collapsedMenu: boolean
}


const Accordion = (props: PropsType) => {
    const  {title, collapsedMenu} = props
    if (!collapsedMenu) {
        return (
            <div>
                <AccordionTitle title={title}/>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={title}/>
            </div>
        )
    }

}

export default Accordion