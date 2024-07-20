const express = require("express");
const router = new express.Router();

const USERS = [
    { id: 1, username: "bob"}, 
    {id: 2, username:"mark"}
]


router.get("/", (req, res)=>{
    res.json({users: USERS})
})


router.get("/:id", function(req, res){
                            // for each user, find where user.id = req.params.id turned into a string with the '+' unary operator
    const user = USERS.find(u => u.id === +req.params.id)
    res.json(user)
})

module.exports = router;