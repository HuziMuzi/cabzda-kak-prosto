import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    const [onOff, setOnOff] = useState(false)

    const togle = () => {
        setOnOff(!onOff)
    }

  return (
    <div className="App">
        <UncontrolledAccordion titleValue={'Hello developers'}/>
        {/*<Rating />*/}
        {/*<UncontrolledAccordion titleValue={'menu'}/>*/}
        {/*<Accordion titleValue={'Menu'}  collapsed={false}/>*/}
        {/*<OnOff/>*/}
      {/*  <Rating value={1}/>*/}
      {/*  <Rating value={2}/>*/}
      {/*  <Rating value={3}/>*/}
      {/*  <Rating value={4}/>*/}
      {/*  <Rating value={5}/>*/}
      {/*<Accordion1 titleValue={'School - TWO'}  collapsed={false}/>*/}
    </div>
  );
}

export default App;
