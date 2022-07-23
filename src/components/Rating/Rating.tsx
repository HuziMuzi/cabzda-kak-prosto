import React, {ChangeEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";


type RatingPropsType = {
    // value : 0 | 1 | 2 | 3 | 4 | 5
}

export type valueType = 0 | 1 | 2 | 3 | 4 | 5

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')
    const [value, setValue] = useState(0)

    // const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.currentTarget.value)
    //     setValue(e.currentTarget.value)
    // }
    const clickSelected = (val: number) => {
        setValue(val)
    }
    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>


            {/*<Star selected={value > '0'} clickSelected={()=>{clickSelected('1')}} />*/}
            {/*<Star selected={value > '1'} clickSelected={()=>{clickSelected('2')}}/>*/}
            {/*<Star selected={value > '2'} clickSelected={()=>{clickSelected('3')}}/>*/}
            {/*<Star selected={value > '3'} clickSelected={()=>{clickSelected('4')}}/>*/}
            {/*<Star selected={value > '4'} clickSelected={()=>{clickSelected('5')}}/>*/}
            {/*<div>*/}
            {/*    <input type={"range"} min={0} max={5} value={value} onChange={onChangeValue}/>{value}*/}
            {/*</div>*/}
        </div>)

}

type StarPropsType = {
    selected: boolean
    // clickSelected: any
    setValue: (value:number) => void
    value:number
}

function Star(props: StarPropsType) {
    const onClickSelected = () => {
        props.setValue(props.value)
    }
    return <span onClick={onClickSelected}>{props.selected ? <b>star </b> : 'star '}</span>
}