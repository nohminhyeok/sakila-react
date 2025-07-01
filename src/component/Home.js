export default function Home() {

    return (
        <div>
            <h1>Home</h1>
        </div>
    )

}

/*
학습-1
rfc 치고 enter 누르면 기본 구조를 자동으로 완성

import { useState } from "react";

export default function Home() {
    // let count = 0;
    const [count, setCount] = useState(0); 
    // 일반 변수가 아닌 상태 변수
    // 상태 변수의 setter가 호출되면 컴포넌트는 렌더링이 된다.

    return (
        <div>
            <h1>Home</h1>
            <div>count : {count}</div>
            <button onClick={() => {setCount(count + 1); alert(count);}}>count 1 증가</button>
        </div>
    )
}

학습-2
export default function Home() {
    function show() {
        alert('주의');
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={show}>주의</button>
            <br />
            <button onClick={() => {alert('주의2')}}>주의2</button>
        </div>
    )
}
*/

/*
학습-3
export default function Home() {
    const x = Math.random();
    const arr = ["루피", "조로", "상디"]

    // if, for, forEach

    return (
        <div>
            <h1>Home</h1>
            // 조건문 삼항연산자 사용 //
            <div>
                {
                    x > 0.6 ? <span>대</span> : x > 0.3 ? <span>중</span> : <span>소</span>
                }
            </div>
            
            // 반복문 map 메서드 사용//
            <div>
                {
                    arr.map((name) => (<div> {name} </div>))
                }
            </div>
        </div>
    )
}
*/