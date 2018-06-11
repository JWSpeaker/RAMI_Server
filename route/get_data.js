
var get_data = function(req, res){
    console.log("/get_data(get)");
    console.log(">> redirect to ./public/w_data.json");
    res.redirect('./public/w_data.json');
};


module.exports.get_data = get_data;