import React from 'react';
import './App.css';
import Rating from "./components/rating/Rating";
import Accordion from "./components/accordion/Accordion";

const App = () => {
    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My Friends"}/>
            <Accordion title={"Accordion Title"} collapsedMenu={true}/>
            <Accordion title={"Accordion Title"} collapsedMenu={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;

const PageTitle = (props: any) => {
    return <h1>{props.title}</h1>
}


