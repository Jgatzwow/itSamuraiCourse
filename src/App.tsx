import React, {useState} from 'react';
import './App.css';
import {Rating} from './components/rating/Rating';
import Accordion from './components/accordion/Accordion';
import {OnOff} from './components/accordion/OnnOff/OnOff';
import ControlledAccordion from './components/controlledAccordion/ControlledAccordion';

const App = () => {

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const toggleMenu = (collapsed: boolean) => {
        setCollapsed(!collapsed)
    }
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My Friends'}/>

            <OnOff/>
            <Accordion title={'Accordion Title'}/>
            <ControlledAccordion collapsed={collapsed} toggleMenu={toggleMenu} title={'ControlledAccordion Title'}/>

            <Rating />

            {/*<Rating value={0}/>
            <Rating value={1}/>

            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

export default App;

const PageTitle = (props: any) => {
    return <h1>{props.title}</h1>
}


