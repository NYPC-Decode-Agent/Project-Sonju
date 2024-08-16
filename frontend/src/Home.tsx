import React, {useState } from 'react'

export function UpdateNumber({ updateNum, num }: { updateNum: React.Dispatch<React.SetStateAction<number>>, num: number }) { // num 타입 추가

    const add = () => {
        updateNum(num + 1 );
    }

    return (
        <div style={{color:'red'}}>
            <button  onClick={add}>+</button>
            <h1>{num}</h1>
        </div>
    )
}

export default function Home() {

    const [num, updateNum] = useState(0); // num 상태를 Home 컴포넌트로 이동

    return (
        <div>
            <div className="h-96" style={{backgroundImage: `url("./landing1.png")`}}></div>
            <div className="h-96" style={{backgroundImage: `url("./landing2.png")`}}></div>
            <div className="h-96" style={{backgroundImage: `url("./landing3.png")`}}></div>
            <div className="h-96 bg-white"></div>
            <div className="h-96" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.375), rgba(0, 0, 0, 0.375)), url("./landing4.png")`}}></div>
        </div>
    )
}
