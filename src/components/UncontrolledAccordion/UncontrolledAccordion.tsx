import React, {useState} from "react";


type AccardionPropsType = {
    titleValue: string
    // collapsed?: boolean
    // onClick: () => void
}




function UncontrolledAccordion(props: AccardionPropsType) {
    // const collapsed = true
    // console.log('Accordion rendering')
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody  body={props.titleValue}/>}
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

export default UncontrolledAccordion