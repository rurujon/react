const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')
const request = require('request')
const oracledb = require('oracledb')
const { title } = require('process')
const jwt = require('jsonwebtoken')
const tokenKey = 'dkzldpabflfls'

oracledb.autoCommit = true

var connection

oracledb.getConnection({
    user:'suzi',
    password:'a123',
    connectString:'localhost:1521/xe'
}, function(err,conn){
    if(err){
        console.log(err.message)
        return 
    }

    connection = conn
    console.log('Oracle DB 연결 성공!')
})

const app = express()

app.set('views',__dirname + '/views')
app.set('view engine','ejs')
console.log('뷰 엔진이 ejs로 설정')

app.set('port',8080)
app.use(express.json())
app.use(express.urlencoded({extended:true}))    //post 방식의 데이터

let authCode = ''

app.get('/',function(req,res){
    var context = {'title':'금융결제원 API'}

    authCode = req.query.code
    console.log(authCode)

    req.app.render('index.ejs',context,function(err,html){
        res.end(html)
    })
})

app.get('/signup',function(req,res){
    var context = {'title':'인증'}

    req.app.render('signup.ejs',context,function(err,html){
        res.end(html)
    })
})

app.get('/token',function(req,res){

    var option = {
        method:'POST',
        url:'https://testapi.openbanking.or.kr/oauth/2.0/token',
        header:'',
        form:{
            //post 방식일때는 form, get방식일때는 qs
            code:authCode,
            client_id:'5237c517-96fe-4119-8003-325aca7c5433',
            client_secret:'5947c891-8b07-4366-a324-55fa3a03e6be',
            redirect_uri:'http://localhost:8080/',
            grant_type:'authorization_code'
        }
        //이렇게 받아온 토큰을 DB에 저장할 것.

    }
    request(option,function(err,resp,body){
        console.log('JSON:' + body)

        var result = JSON.parse(body)
        res.render('tokenResult.ejs',{data:result,title:'회원가입'})
    })
})

app.post('/addUser',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var accessToken = req.body.accessToken;
    var refreshToken = req.body.refreshToken;
    var userSeqNo = req.body.userSeqNo;

    sql = 'insert into fintech values(:name,:email,:password,:accessToken,:refreshToken,:userSeqNo,:fintechUseNum)'

    connection.execute(sql,[name,email,password,accessToken,refreshToken,userSeqNo,''],function(err){
        if(err) throw err
        res.json('가입완료!')
    })
})

app.get('/login',function(req,res){

    var context = {'title':'로그인'}

    req.app.render('login.ejs',context,function(err,html){
        res.end(html)
    })
})

app.post('/authLogin',function(req,res){

    var email = req.body.email
    var password = req.body.password

    //console.log(email + ':' + password)

    sql = 'select * from fintech where email = :email'

    connection.execute(sql,[email], function(err,result){

        if(err) throw err
        
        if(result.rows.length==0){
            res.json('이메일을 확인하세요')
        }else{
            // console.log('select : ', result.rows)
            // console.log('컬럼명 : ', result.metaData)
            // console.log('password : ', result.rows[0][2])

            var dbPassword = result.rows[0][2]

            if(dbPassword == password){

                //로그인 성공시 jwt 토큰을 발급
                //jwt.sign(payload,secretKey,option,callback)

                jwt.sign(
                    {
                        //필요한 정보를 넣어줌(사용자 정의)
                        name:result.rows[0][0],
                        email:result.rows[0][1]
                    },
                    tokenKey,   //사용자정의 전자서명
                    {
                        expiresIn:'1d',             //토큰 유효 기간
                        issuer:'fintech.admin',     //토큰 사용자
                        subject:'user.login.info'   //토큰 제목

                    },
                    function(err,token){
                        console.log('로그인 성공')
                        console.log('내가 발급한 토큰 : ', token)
                        res.json(token)
                    }

                )
            }else{
                res.json('패스워드를 확인하세요')
            }
        }
    })
})

app.get('/list',function(req,res){

    var context = {'title':'사용자 계좌정보'}

    //서버에서 가져온 사용자 정보를 뿌려줌
    req.app.render('list.ejs',context,function(err,html){
        res.end(html)
    })
})

app.post('/listInfo',function(req,res){

    var email = req.body.email

    sql = 'select * from fintech where email=:email'

    connection.execute(sql,[email],function(err,result){

        if(err) throw err

        if(result.rows.length>0){
            var dbEmail = result.rows[0][1]
            var accessToken = result.rows[0][3]
            var userSeqNo = result.rows[0][5]
        }

        console.log(accessToken)

        if(dbEmail!==email){ //undefined!==inna@naver.com
            console.log('이메일을 정확히 입력하세요')
            return
        }else{
            var option = {
                method:'GET',
                url:'https://testapi.openbanking.or.kr/v2.0/user/me',
                headers:{
                    Authorization:'Bearer ' + accessToken
                },
                qs:{
                    user_seq_no:Number(userSeqNo)
                }
            }

            request(option,function(err,resp,body){
                console.log(body)

                var result = JSON.parse(body)
                res.json(result)
            })
        }

    })
})


app.get('/logout',function(req,res){
    var context = {'title':'로그아웃'}

    req.app.render('logout.ejs',context,function(err,html){
        res.end(html)
    })
})

http.createServer(app).listen(app.get('port'),()=>{
    console.log('서버를 시작했습니다:' + app.get('port'))
})