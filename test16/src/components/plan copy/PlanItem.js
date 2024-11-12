import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Article } from '../styled/PlanStyled';

const PlanItem = ({plan, onDel, onToggle}) => {

    const {id,text,day,done} = plan

    return (
        <Article className={done ? 'on' : ''} onDoubleClick={()=>onToggle(id)}>
            <h3>일정 : {text}</h3>
            <p>일시 : {day}</p>
            <i className='icon'>
                <AiOutlineCloseCircle onClick={()=>onDel(id)}/>
            </i>
            
        </Article>
    );
};

export default PlanItem;