import React, {useState} from 'react';
import AccordionTitle from './accordionTitle/AccordionTitle';
import AccordionBody from './accordionBody/AccordionBody';

export type AccordionPropsType = {
    title: string
}


const Accordion = (props: AccordionPropsType) => {
    const {title} = props

    const [collapsed, setCollapsed] = useState(true)

    const toggleMenu = (collapsed: boolean) => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle callback={()=> {toggleMenu(collapsed)}} title={title}/>

            {!collapsed && <AccordionBody/>}
        </div>
    )
}

export default Accordion