import React from "react";
import PropTypes from 'prop-types'

const Test5Sub = ({title,name,age,addr,tel,color,done}) => {
    return (
        <div style={{border:`1px solid ${color}`,
        padding:30}}>
            <h2>{title}</h2>
            <ul>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>전화 : {tel}</li>
                <li>컬러 : {color}</li>
                <li>로그인 여부 : {done ? '로그인' : '로그아웃'}</li>
            </ul>
            
        </div>
    );
};

//PropType : 전달받은 데이터의 유효성을 검사
Test5Sub.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    addr:PropTypes.string,
    tel:PropTypes.string,
    color:PropTypes.string,
    done:PropTypes.bool
}

//defaultProps : 기본값을 정의
Test5Sub.defaultProps = {
    name:'무명의',
    age:20,
    addr:'대한민국',
    tel:'010-0000-0000',
    color:'yellow',
    done:true
}

export default Test5Sub