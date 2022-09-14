import React from 'react';
import AccordionTitle from '../accordion/accordionTitle/AccordionTitle';
import AccordionBody from '../accordion/accordionBody/AccordionBody';


type ControlledAccordionPropsType = {
    title: string
    collapsed: boolean
    toggleMenu: (collapsed: boolean) => void
}


const ControlledAccordion = (props: ControlledAccordionPropsType) => {
    const {title,collapsed,toggleMenu} = props





    return (
        <div>
            <AccordionTitle callback={()=> {toggleMenu(collapsed)}} title={title}/>

            {!collapsed && <AccordionBody/>}
        </div>
    )
}

export default ControlledAccordion