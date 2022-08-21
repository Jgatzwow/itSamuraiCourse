import React from "react";
import AccordionTitle from "./accordionTitle/AccordionTitle";
import AccordionBody from "./accordionBody/AccordionBody";

type PropsType = {
    title: string
    collapsedMenu: boolean
}


const Accordion = (props: PropsType) => {
    const  {title, collapsedMenu} = props

        return (
            <div>
                <AccordionTitle title={title}/>
                {!collapsedMenu &&  <AccordionBody/> }
            </div>
        )
}

export default Accordion