import React, { Component } from 'react';

const Test3 = () => {

    //자바 스크립트 영역
    const title = '신산 명세서'
    const name = '배수지'
    const age = 29
    const addr = '서울'
    const gender = '여자'

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>성별 : {gender}</li>
            </ul>

            /* 여러줄 주석 */
            {/* 여러줄 주석 */}

            <p
                //주석
                /*
                여러
                줄
                주석
                */
            ></p>
            문단입니다.
        </div>

    );
};

export default Test3;