
var learning = function(req, res){
    console.log("/learning(get)");

    //run python program
    var exec = require('child_process').exec;
    exec('python3 ./BayesianFilter/module.py ./public/', function(err, stdout, stderr){
        if(err){
            cosnole.log('child process error');
        }
        else{
            console.log(stdout);
        }
    });
};


module.exports.learning = learning;