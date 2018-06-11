



module.exports = {
    server_port :3000,
    route_info : [
        {path : "/index", file : "./index", type : "get", method : "index_get"},
        {path : "/learning", file : "./learning", type : "get", method : "learning"},
        {path : "/add", file : "./add", type : "get", method : "add_get"}
    ]



};