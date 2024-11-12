import React from 'react';
import styled,{css} from 'styled-components';

const Container = styled.div`
    border:1px solid #000;
    padding:20px;
    margin:20px;
    background:${props => props.bg ? props.bg : 'yellow'};
    width:${props => props.w ? props.w : '100px'}
`
const Box = styled.button`
    width:${props => props.width ? props.width : '100px'};
    background:${props => props.bg ? props.bg : 'skyblue'};

    ${props => props.good && css`
        background:green;
        width:300px;
        color:#fff;
        height:50px;
        border:none;
        transition:1s;
        &:hover{
        background:hotpink;
        color:#000;
        }
    `}
`


const Test7 = () => {
    return (
        <Container w='500px' bg='pink'>
            <Box width='200px' bg='green'>Test1</Box>
            <Box width='100px' bg='yellow'>Test2</Box>
            <Box width='500px'>Test3</Box>
            <Box width='300px' bg='tomato'>Test4</Box>
            <Box width='400px'>Test5</Box>
            <Box good>Test6</Box>
            
        </Container>
    );
};

export default Test7;