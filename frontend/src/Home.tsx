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
            <h1>Home Page</h1>
            <UpdateNumber num={num} updateNum={updateNum}/>
        </div>
    )
}
