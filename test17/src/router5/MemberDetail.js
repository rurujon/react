import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const MemberDetail = () => {

    const {memberID} = useParams()
    const history = useHistory()
    const [member,setMember] = useState([])

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${memberID}`
        fetch(url)
        .then(res=>res.json())
        .then(res=>setMember(res))
    },[])

    const style = {
        border:'2px solid tomato',
        padding:20,
        margin:10,
        borderRadius:15
    }

    const onBack = () => {
        history.push('/')
    }

    const {name,email,phone,website} = member

    return (
        <div style={style}>
            <h2>멤버 세부내용 : {memberID}</h2>
            <h3>이름 : {name}</h3>
            <h3>이메일 : {email}</h3>
            <h3>전화번호 : {phone}</h3>
            <h3>웹사이트 : {website}</h3>
            <button onClick={onBack}>첫페이지</button>
        </div>
    );
};

export default MemberDetail;