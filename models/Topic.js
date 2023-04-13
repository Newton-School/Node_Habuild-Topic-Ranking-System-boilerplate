const mongoose = require('mongoose');

/*
You need to implement a Mongoose schema for a topic that includes the name and description of the topic. The name field is a required unique string, representing the name of the topic. The description field is a required string, representing a brief description of the topic.

Here's a sample object for this schema:

{
name: "Mathematics",
description: "The study of numbers, quantities, and shapes."
}
*/

const topicSchema = new mongoose.Schema({
  //Write your Code Here
});


module.exports = mongoose.model('Topic', topicSchema);
