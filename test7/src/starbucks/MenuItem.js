import React from 'react';

const MenuItem = ({item, onMenu}) => {

    const {name} = item

    const str1 = name.charAt(0).toUpperCase()
    const str2 = name.slice(1)
    const menu = str1 + str2

    return (
        <button onClick={()=>onMenu(name)}>
            {menu}
        </button>
    );
};

export default MenuItem;