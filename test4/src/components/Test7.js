import React, {Fragment, useState} from 'react';

const Test7 = () => {

    const [check,setCheck] = useState(false)

    const changeCheck = (evt) => {
        const {checked} = evt.target
        setCheck(checked)
    }

    return (
        <Fragment>
            <p>
                <input type='checkbox' checked={check}
                onChange={changeCheck}/>
                {check ? '숨기기' : '보이기'}
            </p>
            {
                check &&
                <div style={{width:400,height:100,background:'tomato',margin:30}}>
            
                </div>
            }
        </Fragment>
    );
};

export default Test7;