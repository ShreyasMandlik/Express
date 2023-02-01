const { response } = require('express');
const express=require('express');
const res = require('express/lib/response');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


users=[
    {
        id:1,
        username:"Shreyas0170",
    },
    {
        id:2,
        username:"Brijesh29",
    },
]


app.get("/users",(request,response)=>{
    response.json(users);
});