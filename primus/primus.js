var Primus = require('primus')

let go = (server) => {
    const primus = new Primus(server, {
        /* options */
    });


    //primus.save(__dirname +'/primuslib.js');

    primus.on("connection", (spark) => {
        console.log("ye");
        spark.on("data", (data) => {
            primus.write(data);
        })
    });

    
    
};

module.exports.go = go;