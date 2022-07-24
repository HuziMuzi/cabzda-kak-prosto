import React, {useState} from 'react';
import './App.css';
import {Rating, valueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    const [onOff, setOnOff] = useState(false)
    const [ratingValue, setRatingValue] = useState<valueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState(false)
    const [on, setOn] = useState(false)

    const togle = () => {
        setOnOff(!onOff)
    }

  return (
    <div className="App">
        {/*<OnOff on={on} setOn={setOn}/>*/}
        <UncontrolledOnOff onChange={setOn}/> {on.toString()}
        {/*<Accordion titleValue={'helllo'} collapsed={accordionCollapsed} onClick = {()=>{setAccordionCollapsed(!accordionCollapsed)}}/>*/}
        {/*<UncontrolledRating/>*/}
        {/*<UncontrolledAccordion titleValue={'Hello developers'}/>*/}
        {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
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
