import React, {useState} from 'react';
import AccordionTitle from './accordionTitle/AccordionTitle';
import AccordionBody from './accordionBody/AccordionBody';

type PropsType = {
    title: string

}


const Accordion = (props: PropsType) => {
    const {title} = props

    const [collapsed, setCollapsed] = useState(true)

    const toggleMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={title}/>
            <button onClick={toggleMenu}>toggleMenu</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

export default Accordion