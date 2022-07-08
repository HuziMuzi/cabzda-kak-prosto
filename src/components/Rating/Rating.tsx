import React, {ChangeEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";


type RatingPropsType = {
    // value : 0 | 1 | 2 | 3 | 4 | 5
}

export type value = 0 | 1 | 2 | 3 | 4 | 5

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')
    const [value, setValue] = useState('0')

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setValue(e.currentTarget.value)
    }
    const clickSelected = (val:string) => {
        setValue(val)
    }
    return (
        <div>
            <Star selected={value > '0'} clickSelected={()=>{clickSelected('1')}} />
            <Star selected={value > '1'} clickSelected={()=>{clickSelected('2')}}/>
            <Star selected={value > '2'} clickSelected={()=>{clickSelected('3')}}/>
            <Star selected={value > '3'} clickSelected={()=>{clickSelected('4')}}/>
            <Star selected={value > '4'} clickSelected={()=>{clickSelected('5')}}/>
            <div>
                <input type={"range"} min={0} max={5} value={value} onChange={onChangeValue}/>{value}
            </div>
        </div>)

}

type StarPropsType = {
    selected: boolean
    clickSelected: any
}

function Star(props: StarPropsType) {
    const onClickSelected = () => {
        props.clickSelected()
    }
    console.log('Star rendering')
    return props.selected ? <span><b>star</b> </span > : <span onClick={onClickSelected}>star </span>
}