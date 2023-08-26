/// npmjs.org ka express lo search lite yin di code twae lait mae
// express thone mae so pii declare lote tae ta baw
const express = require('express') //ES 5

import express from 'express' // a pow ka declare nae a tutu bae

const app = express()

//// npmjs.org ka dotenv lo search lite yin di code twae lait mae
require('dotenv').config() 

const PORT = process.env.PORT || 3000;


app.get('/', function (_req, res, _next) {
  res.send('HI')

//api create lote mae so yin 
    // res.json(
    //     {
    //         msg: "This is API",
    //         data: "hello",
    //         status: true
    //     }
    // )
})

// localhost:3000/ ES 5
// app.listen(PORT, function(req,res)
//     {
//         console.log(`Server is running on PORT ${PORT}`)
//     }
// )


//ES 6
app.listen(PORT, () =>
    {
        console.log(`Server is running on PORT ${PORT}`)
    }
)