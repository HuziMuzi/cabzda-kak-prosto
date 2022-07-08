import React, {ChangeEvent, useState} from "react";


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

    return (
        <div>
            <Star selected={value > '0'}/>
            <Star selected={value > '1'}/>
            <Star selected={value > '2'}/>
            <Star selected={value > '3'}/>
            <Star selected={value > '4'}/>
            <div>
                <input type={"range"} min={0} max={5} value={value} onChange={onChangeValue}/>{value}
            </div>
        </div>)

}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return props.selected ? <span><b>star</b> </span> : <span>star </span>
}