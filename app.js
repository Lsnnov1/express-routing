const express = require("express")
const ExpressError = require("./expressError")
const routes = require("./routing")
const morgan = require("morgan")

const app = express();

// listens to every request
app.use(express.json())
app.use("/routes", routes)
app.use(morgan('dev'))

app.get("/", function(req, res, next){

})


app.get("/secret", (req, res) =>{
   if(req.query.password !== "monkeybreath"){
    throw new ExpressError("invalid password", 402)
   }
   res.send("SECRETY SECRETS")

})
app.get("/secreto", (req, res) =>{
   if(req.query.password !== "monkeybreath"){
    throw new ExpressError("invalid password", 402)
   }
   res.send("SECRETY SECRETS SIN MIEL")

})

module.exports = app;
















app.listen(3000, function(){
    console.log("server started");
})