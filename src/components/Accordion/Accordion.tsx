import React, {useState} from "react";

type AccardionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
}

function  Accardion(props: AccardionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{props.onClick()}}/>
            <button onClick={()=> {props.onClick()}}>TOGLE</button>
            {props.collapsed && <AccordionBody body={props.titleValue}/>}
        </div>

    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

type AccordionBodyType = {
    body: string
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            <li>{props.body} 1</li>
            <li>{props.body} 2</li>
            <li>{props.body} 3</li>
        </ul>
    )
}

export default Accardion