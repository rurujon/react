import React from 'react';
import './Test3.css'
import myStyle from './Test3.module.css'

const Test3 = () => {
    return (
        <div className='wrap'>
            {/* css,module */}
            <div className='box'></div>
            <div className={myStyle.box}></div>

            {/* 다중 클래스 백틱 */}
            <div className='size bg'></div>
            <div className={`${myStyle.size} ${myStyle.bg}`}></div>
            <div className={`size ${myStyle.bg}`}></div>

            {/* 다중 클래스 */}
            <div className={[myStyle.size,myStyle.bg].join(' ')}></div>
            <div className={['size',myStyle.bg].join(' ')}></div>
        </div>
        
    );
};

export default Test3;

/*
module.css 테스트 (sass 아님)

module.css : css 이름이 충돌 나지 않도록
자동으로 이름을 생성해줌


1. 파일명.css 
2. 파일명.module.css 
- 클래스명이 중복되지 않게 작업
- 기존에 프로젝트의 클래스를 건드리지 않고 같은이름으로 작성하되 중복되지 않게 해줌 
- 클래스명의 중복 제거 
일반 css : className="box"
module.css : 파일명_클래스명__xxxx
className={참조변수.box} => 파일명_box_xxxx */