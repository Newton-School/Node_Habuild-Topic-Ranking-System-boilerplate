const express = require("express");

const { getAllUsers, getAssessments, updateRanking, getAllRanks, getAllTopics
} = require("../controllers/rankingControllers");

const getLoggedInUser = require("../middlewares/getLoggedInUser");

const router = express.Router();

/* 
For testing purpose only
router.get('/u', getAllUsers);
router.get('/r', getAllRanks);
router.get('/t', getAllTopics);
*/

router.get('/', getLoggedInUser, getAssessments);
router.put('/', getLoggedInUser, updateRanking)

module.exports = router;