const jwt = require('jsonwebtoken');
const Ranking = require('../models/Ranking');
const User = require("../models/User");
const Topic = require("../models/Topic");

const JWT_SECRET = process.env.JWT_SECRET;

getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({ users });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

getAllRanks = async (req, res) => {
    try {
        const ranks = await Ranking.find();
        res.status(200).send({ ranks });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

getAllTopics = async (req, res) => {
    try {
        const topics = await Topic.find();
        res.status(200).send({ topics });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

/*
Write a controller getAssessments. It should retrieve the rankings for the authenticated user from the database and calculate the assessments by mapping each ranking to its corresponding topic name and score. Then, it should sort the assessments in ascending order based on the score and send them as a response in the format of an object with the topic names as keys and their corresponding scores as values. If there is an error while retrieving the data from the database, it should send an error response with a 500 status code and an appropriate error message.

Possible sample input:

Request: GET request to the endpoint for getting assessments
Request headers: Authentication token in the Authorization header
Request body: None
Possible sample output:

Response status: 200
Response body:
{
"assessments": {
"Topic A": 60,
"Topic B": 80,
"Topic C": 90
}
}
Another possible sample input:

Request: GET request to the endpoint for getting assessments
Request headers: Authentication token in the Authorization header
Request body: None
Possible sample output:

Response status: 200
Response body:
{
"assessments": {
"Topic D": 50,
"Topic E": 70,
"Topic F": 85
}
}
Another possible sample input:

Request: GET request to the endpoint for getting assessments
Request headers: Authentication token in the Authorization header
Request body: None
Possible sample output:

Response status: 200
Response body:
{
"assessments": {}
}
Note: This output indicates that the user has not taken any assessments yet.
*/
getAssessments = async (req, res) => {
    //Write your code here
};

/*
The updateRanking controller updates the ranking of a particular topic for the logged-in user. Here are the instructions for using this controller:

Retrieve the topic and score data from the request body.
Find the ranking for the current user and the specified topic.
If the ranking does not exist, create a new ranking and save it to the database.
If the ranking does exist, update its score value and save the changes to the database.
Return a success response with a message indicating that the ranking has been updated.
If there is an error during the process, return an error response with an appropriate status code and message.

Inputs:
topic: The name of the topic for which the ranking needs to be updated. This is a required input.
score: The new score for the topic. This is a required input.
Outputs:

If the update is successful, the controller returns a JSON object with a success message: { message: 'Ranking updated successfully' }.
If there is a validation error, the controller returns a JSON object with an error message: { error: 'Validation Error Message' }.
If there is an internal server error, the controller returns a JSON object with an error message: { error: 'Internal Server Error' }.
*/

updateRanking = async (req, res) => {
    //Write your code here
};

module.exports = { getAllUsers, getAssessments, updateRanking, getAllRanks, getAllTopics }