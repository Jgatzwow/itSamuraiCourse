import React, {useState} from 'react';
import AccordionTitle from './accordionTitle/AccordionTitle';
import AccordionBody from './accordionBody/AccordionBody';

type PropsType = {
    title: string

}


const Accordion = (props: PropsType) => {
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