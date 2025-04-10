let express = require('express');
let appp = express();
let route = require('./routes/route')
require('dotenv').config();
let port_no = process.env.PORT_NO


appp.use('/' , route);

appp.listen(port_no,()=>{
console.log(`server is running on port http://localhost:${port_no}`)
})

// let exp = require('express');
// let route = require('./routes/route');
// require('dotenv').config();

// port_no = process.env.PORT_NO


// let app = exp();
// app.use('/' , route);

// app.listen(port_no,()=>{
//     console.log(`server is running on port http://localhost:${port_no}`);
// })




