import React from 'react';

const Test2Sub = ({onAdd, onDel}) => {
    return (
        <div>
            <h3>이름 추가</h3>
            <p>
                <button onClick={()=>onAdd('이정재')}>이정재</button>
                <button onClick={()=>onAdd('차태현')}>차태현</button>
                <button onClick={()=>onAdd('조인성')}>조인성</button>
            </p>
            <h3>이름 삭제</h3>
            <p>
                <button onClick={()=>onDel(1)}>배수지</button>
                <button onClick={()=>onDel(2)}>정인선</button>
                <button onClick={()=>onDel(3)}>정인나</button>
            </p>
        </div>
    );
};

export default Test2Sub;