import React, {useState, useRef, useEffect} from 'react';
import GlobalStyle from '../styled/Global';
import PlanAdd from './PlanAdd';
import PlanList from './PlanList';
//import dataList from './data'

const Plan = () => {

    //const no = useRef(dataList.length + 1)

    const [plans, setPlans] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/plans')
        .then(res=>res.json())
        .then(res=>setPlans(res))
    },[])

    const onDel = (id) => {

        fetch(`http://localhost:4000/plans/${id}`,{
            method:'delete'
        })

        setPlans(plans.filter(plan=>plan.id!==id))
    }

    //수정 1 : 수정할 데이터 꺼내기
    //수정 2 : 수정하기
    //수정 3 : 수정한 데이터 다시 입력
    //수정 4 : 전체 데이터 출력
    const fetchPlan = async(id) => {
        const res = await fetch(`http://localhost:4000/plans/${id}`)
        const data = await res.json()

        return data
    }

    const onToggle = async(id) => {

        //json 데이터를 꺼내와서 수정
        const togglePlan = await fetchPlan(id)

        //수정
        const updatePlan = {
            ...togglePlan,
            done:!togglePlan.done
        }

        //수정한 데이터 다시 입력
        const res = await fetch(`http://localhost:4000/plans/${id}`,{
            method:'put',
            headers:{
                "Content-type":'application/json'
            },
            body:JSON.stringify(updatePlan)
        })

        getToggle() //화면 출력

    }

    const getToggle = () => {

        const config = {method:'get'}
        fetch('http://localhost:4000/plans',config)
        .then(res=>res.json())
        .then(res=>setPlans(res))

    }

    const onAdd = (form) => {
        
        fetch('http://localhost:4000/plans',{
            method:'post',
            headers:{
                "Content-type":'application/json'
            },
            body:JSON.stringify(form)
        })
        .then(res=>res.json())
        .then(res=>setPlans([...plans,res]))
    }

    return (
        <div>
            <GlobalStyle/>
            <PlanAdd onAdd={onAdd}/>
            <PlanList plans={plans} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Plan;