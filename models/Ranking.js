const mongoose = require('mongoose');

/*
You need to implement a Mongoose schema for a ranking system that includes the user, topic, and score of the user's performance. The user and topic fields are both required references to the User and Topic models, respectively. The score field is a required number between 1 and 100, representing the user's performance score for the given topic.

Additionally, this schema has an index on the score field for efficient ranking queries.

Here's a sample object for this schema:

{
user: "60939a083d93a102f0c89410",
topic: "60939a0f3d93a102f0c89411",
score: 85
}
*/
const rankingSchema = new mongoose.Schema({
    //Write your Code Here
});

const Ranking = mongoose.model('Ranking', rankingSchema);

module.exports = Ranking;