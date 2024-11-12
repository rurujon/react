const multer = require('multer')
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const Images = mongoose.model('imagedbs')

//폴더 만들기
try{
    fs.readdirSync('uploads')//있으면 사용
}catch(error){
    fs.mkdirSync('uploads')//없으면 만들어라
}

//저장소 만들기
const fileUploadRoutes = (app,router) => {

    const storage = multer.diskStorage({

        //저장되는 위치
        destination:(req,fileUpload,callback)=>{
            callback(null,'uploads')//콜백함수 매개변수
        },
        filename:(req,fileUpload,callback)=>{
            callback(null,Date.now().toString() + path.extname(fileUpload.originalname))
        }

    })

    const uploads = multer({
        storage:storage,
        limits:{
            files:10,
            fileSize:1024*1024*1024 //10MB
        }
    })

    //라우터 추가
    router.route('/api/fileUpload').post(uploads.array('upload',1),
    (req,res)=>{

        const files = req.files
        let originalName = ''
        let saveName = ''

        if(Array.isArray(files)){

            for(let i=0;i<files.length;i++){
                originalName = files[i].originalname
                saveName = files[i].filename

                Images.create({
                    originalFileName:originalName,//컬럼의 이름:넣을데이터
                    saveFileName:saveName,
                    path:'http://localhost:8080/' + saveName
                })
            }

        }
        return res.status(200).send()
    })

    app.use('/',router)
}

module.exports = fileUploadRoutes