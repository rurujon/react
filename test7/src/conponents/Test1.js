import React from 'react';

const Test1 = () => {

    const onAdd1 = () => {
        alert('test')
    }
    const onAdd2 = (text) => {
        alert(text)
    }

    return (
        <div>
            <button onClick={onAdd1}>확인1</button>
            <button onClick={onAdd2('안녕')}>확인2</button>
            
        </div>
    );
};

export default Test1;