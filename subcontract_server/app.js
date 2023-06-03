const express = require('express')
const app = express()

app.set('views', __dirname+'/views')
app.set('view engine', 'ejs')

//post 방식으로 데이터가 들어오는 경우 json 형태로 변환
app.use(express.urlencoded({extended:false}))

//api 생성
//계약서를 등록, 서명, 완료, 거절, 계약 리스트
//routes()를 사용
const IndexRouter = require('./routes/index')()
app.use('/', IndexRouter)

//localhost:3000/contract 라는 주소로 요청시 모듈을 로드
const contractRouter = require('./routes/contract')()
app.use('/contract', contractRouter)

app.listen(3000, function(){
    console.log('Server Started')
})