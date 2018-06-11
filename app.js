var express = require('express')
,   http    = require('http')
,   static  = require('serve-static')
,   path    = require('path')
,   multer  = require('multer')  //파일 업로드용 미들웨어

var config = require('./config/config');


var app = express();
app.set('port', config.server_port);

//static 파일 연결
app.use('/public', static(path.join(__dirname, 'public')));
//뷰 파일 위치 설정 및 엔진 설정
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

//multer 미들웨어 사용 : 순서 body-parser -> multer -> router
var storage = multer.diskStorage({
    destination : function (req, file, callback){   //업로드한 파일이 저장될 폴더
        callback(null, 'BayesianFilter/learning_data')
    },
    filename:function(req, file, callback){         //업로드한 파일의 이름
        callback(null, file.originalname)
    }
})

var upload = multer({
    storage : storage,
        limits:{
            files:10,                   //개수
            fileSize : 1024*1024*1024   //용량
        }
})




var route_load = require('./route/route_loader');
route_load.init(app);

app.post('/add', upload.array('text', 1), function(req, res){
    console.log(">> load : /add(post)")
    try{
        var files = req.files
        console.log('file info')
        console.dir(req.files[0])
        console.dir('#==========#')
        var originalname = "",
        filename = '',
        mimetype = '',
        size = 0;

        if(Array.isArray(files)){   //파일이 여러개
            console.log('number of files : %d', files.length)
            for(var i = 0 ; i < files.length; i++){
                originalname = files[i].originalname
                filename = files[i].filename
                mimetype = files[i].mimetype
                size = files[i].size;
            }
        }
        else{
            originalname = files[index].originalname;
	    	filename = files[index].name;
	    	mimetype = files[index].mimetype;
	    	size = files[index].size;
        }   
        
        console.log('현재 파일 정보 : ' + originalname + ', ' + filename + ', '
        + mimetype + ', ' + size);

        // 클라이언트에 응답 전송
        res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
        res.write('<h3>파일 업로드 성공</h3>');
        res.write('<hr/>');
        res.write('<p>원본 파일명 : ' + originalname + ' -> 저장 파일명 : ' + filename + '</p>');
        res.write('<p>MIME TYPE : ' + mimetype + '</p>');
        res.write('<p>파일 크기 : ' + size + '</p>');
        res.end();
    }catch(err){
        console.dir(err.stack);
    }

})

http.createServer(app).listen(app.get('port'), function(){
    console.log('Server start at ' + app.get('port'))
})