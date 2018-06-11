
var learning = function(req, res){
    console.log("/learning(get)");

    //run python program
    var exec = require('child_process').exec;
    exec('node -v', function(err, stdout, stderr){
        if(err){
            cosnole.log('child process error');
        }
        else{
            console.log(stdout);
        }
    });

    res.redirect('./public/w_data.json');
};


module.exports.learning = learning;