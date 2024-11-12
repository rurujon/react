import React from "react";
import Test5Sub from "./Test5Sub";

const Test5 = () => {
    return (
        <div>
            <Test5Sub
            title='배수지 신상명세서'
            name='배수지'
            addr='서울'
            tel='010-1234-5678'
            color='tomato'
            done={true}
            />
            <br/>
            <Test5Sub
            title='유인나 신상명세서'
            addr='부산'
            color='blue'
            done={false}
            />
        </div>
    );
};

export default Test5