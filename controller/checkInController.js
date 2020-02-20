const express = require("express");
const path = require("path");

const router = express.Router();

const model = require("../model/post");

router.get("/displayallmembers", function(req, res){
    model.allMembers(function(data) {
    res.json({ membersTable: data });
});
});


module.exports = router;