import axios from 'axios'

//조회
const getUser = async() => {
    
    const res = await axios.get('/api/taxi')

    return res.data 

}

//입력
const addUser = async(user,image) => {

    //주소, 데이터 를 넣음
    axios.post('/api/taxi',{
        name:user.name,
        job:user.job
    })
    .then(res=>{
        console.log(res)//message 띄움
    })
    .catch(error=>{
        console.log(error)
    })

    const formData = new FormData()
    formData.append('upload',image)

    axios.post('/api/fileUpload',formData)
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })
}


//수정
const updateUser = async(user) => {

    //주소, 데이터 를 넣음
    axios.put('/api/taxi',{
        id:user._id,//node의 mongoDB에 자동으로 생성되는 id가 ._id로 생성됨.
        name:user.name,
        job:user.job
    })
    .then(res=>{
        console.log(res)//message 띄움
    })
    .catch(error=>{
        console.log(error)
    })
}

//삭제
const deleteUser = async(id) => {//id로 삭제함으로 매개변수로 id를 넣어줌

    //주소, 데이터 를 넣음
    axios.delete('/api/taxi',{
       data:{id:id}//키:밸류 data{key:value}의 방식으로 데이터에 넘긴다.문범임.
    })
    .then(res=>{
        console.log(res)//message 띄움
    })
    .catch(error=>{
        console.log(error)
    })
}

export default {
    getUser:getUser,
    addUser:addUser,
    updateUser:updateUser,
    deleteUser:deleteUser
}