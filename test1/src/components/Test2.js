import React, { Component, Fragment } from 'react';

class Test2 extends Component {
    render() {
        return(
            /*
            <div>
                <h2>클래스형 컴포넌트</h2>
                <h2>JSX영역</h2>
                <p>return() 안에 한줄 이상의 코딩은 div로 묶어준다.</p>
                
            </div>
            
            <Fragment>
                <div>
                <h2>클래스형 컴포넌트</h2>
                <h2>JSX영역</h2>
                <p>return() 안에 한줄 이상의 코딩은 div로 묶어준다.</p>
                <p>div로 계속 묶어줄 때 ul 안에는 div를 사용할 수 없다.</p>
                </div>
            </Fragment>
            */
            <>
            <div>
            <h2>클래스형 컴포넌트</h2>
            <h2>JSX영역</h2>
            <p>return() 안에 한줄 이상의 코딩은 div로 묶어준다.</p>
            <p>div로 계속 묶어줄 때 ul 안에는 div를 사용할 수 없다.</p>
            <p>Fragment는 생략할 수 있다.</p>
            <p>외 태그는 반드시 /한다</p>
            <img src=''/>
            <input type='text'/>
            </div>
            </>
        );
    }
}

export default Test2