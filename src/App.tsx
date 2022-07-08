import React, {useState} from 'react';
import './App.css';
import UncontrolledAccordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import Accordion from "./components/Accordion/Accordion";

function App() {
    const [onOff, setOnOff] = useState(false)

    const togle = () => {
        setOnOff(!onOff)
    }

  return (
    <div className="App">
        <Rating />
        {/*<UncontrolledAccordion titleValue={'menu'}/>*/}
        {/*<OnOff/>*/}
      {/*  <Rating value={1}/>*/}
      {/*  <Rating value={2}/>*/}
      {/*  <Rating value={3}/>*/}
      {/*  <Rating value={4}/>*/}
      {/*  <Rating value={5}/>*/}
      {/*<Accordion1 titleValue={'School - One'}  collapsed={true}/>*/}
      {/*<Accordion1 titleValue={'School - TWO'}  collapsed={false}/>*/}
    </div>
  );
}

export default App;
