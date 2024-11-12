import React from 'react';

const Sub = (props) =>{ //자식

    //비구조 할당
    const {name,place,date,time,content} = props
    
    return(

        <div>
            <h2>{name}의 이달의 할 일</h2>
            <ul>
                <li>장소:{place}</li>
                <li>날짜:{date}</li>
                <li>시간:{time}</li>
                <li>내용:{content}</li>
            </ul>
        </div>
    )
}

const Test3 = () => {   //부모
    return (
        <div>

            {/* props : 부모컴포넌트에서 자식컴포넌트로 값을 전달할 때 사용 */}
            <Sub name='정인선' place='서울' date='24-09-12' time='오전 11:00' content='회사미팅'/>
            <hr/>
            <Sub name='배수지' place='부산' date='24-12-24' time='오후 10:00' content='개인미팅'/>
            <hr/>
            <Sub name='유인나' place='대구' date='24-09-23' time='오전 09:00' content='팬미팅'/>
        </div>
    );
};

export default Test3;