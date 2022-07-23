// import React, {useState} from "react";
//
// type AccardionPropsType = {
//     titleValue: string,
//     collapsed: boolean
// }


// function UncontrolledAccordion(props: AccardionPropsType) {
//     // const collapsed = true
//     // console.log('Accordion rendering')
//     const [collapsed, setCollapsed] = useState(false)
//     return (
//         <div>
//             <AccordionTitle title={props.titleValue}/>
//             <button onClick={()=> {setCollapsed(!collapsed)}}>TOGLE</button>
//             {collapsed && <AccordionBody body={props.titleValue}/>}
//         </div>
//
//     )
// }

// <AccordionBody body={props.titleValue}/>

// function Accordion(props: AccardionPropsType) {
//     console.log('Accordion rendering')
//     return (
//         <div>
//             <AccordionTitle title={props.titleValue}/>
//             {!props.collapsed && <AccordionBody body={'Hello developers'}/>}
//         </div>
//     )
// }
//
type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}
//
// type AccordionBodyType = {
//     body: string
// }
//
// function AccordionBody(props: AccordionBodyType) {
//     return (
//         <ul>
//             <li>{props.body} 1</li>
//             <li>{props.body} 2</li>
//             <li>{props.body} 3</li>
//         </ul>
//     )
// }
//
//
export default AccordionTitle