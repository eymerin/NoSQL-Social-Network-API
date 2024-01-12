// Imports dependencies from library
const { Schema, model, Types } = require('mongoose');

// Definines user schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Uses regular expression to validate email
      validate: { 
        validator: function(v) {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
        }
      }
    },
    thoughts:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends:[
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  },
  {
    toJSON: {
      virtuals: true, // allows for virtual properties being displayed when a user document is transformed into JSON format
    },
    id: false, // disables returning the default '_id' field in the user model when calling to JSON() method
  }
);

// Returns the number of friends in the friends array as the virtual property 'friendCount'
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});
// Creating the User model from the userSchema
const User = model('User',userSchema)
// Exporting the User model as a module
module.exports = User