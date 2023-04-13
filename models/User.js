const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (value.length < 8) {
          throw new Error("password should be at least 8 characters long");
        }
      },
    },
  },
  { timestamps: true }
);

/*
You need to implement a virtual field in a Mongoose schema for a user's rankings that includes a reference to the Ranking model. The virtual field is named "rankings" and is defined with the ref, localField, and foreignField options. The ref option specifies the model to use for the reference, which is 'Ranking'. The localField option specifies the field in this schema that should match the foreignField in the referenced model, which is '_id'. The foreignField option specifies the field in the referenced model that should match the localField in this schema, which is 'user'.
*/

// Write your Code Here

userSchema.pre("save", async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model("User", userSchema);
