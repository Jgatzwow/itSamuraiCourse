import React from 'react';
import './App.css';
import Rating from './components/rating/Rating';
import Accordion from './components/accordion/Accordion';
import {OnOff} from './components/accordion/OnnOff/OnOff';

const App = () => {
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My Friends'}/>

            <OnOff/>
            <OnOff/>
            <OnOff/>
            <Accordion title={'Accordion Title'}/>
            <Accordion title={'Accordion Title'}/>
            <Rating value={2}/>

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


