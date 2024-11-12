import React from 'react';
import styled from 'styled-components'
//얘 많이 쓴다.

//const 스타일드컴포넌트 = styled.태그``
const Container = styled.section`
    width:300px; padding:20px;
    border:1px solid #000
`
const Box1 = styled.section`
    padding:20px; background:pink;
    transition:0.5s; margin-bottom:15px;
    &:hover{
        background:skyblue;
    }
`
const Box2 = styled('article')`
    padding:15px; background:tomato; width:100%;
    box-sizing:border-box; transition:1s;
    margin-bottom:15px;
    &:hover{
    width:150%;
    }
`
const Box3 = styled('div')`
    width:100%; height:100px; background:yellow;
    margin-bottom:10px; transition:1s;
    &:hover{
        border-radius:0 50px 0 50px;
        background:green;
    }
`
const Button = styled.button`
    width:150px; height:80px;
    background:#000; color:#fff;
    border:none;
`

const Test6 = () => {
    return (
        <Container>
            <Box1>안녕하세요1</Box1>
            <Box2>안녕하세요2</Box2>
            <Box3>안녕하세요3</Box3>
            <Button>확인</Button>
        </Container>
    );
};

export default Test6;