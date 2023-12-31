import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  emailVerified: Date,
  image: String,
  friends : [
    {type: Schema.Types.ObjectId, 
      ref: 'Users' 
    }
  ],
  incoming_request : [
    {type: Schema.Types.ObjectId, 
      ref: 'Users' 
    }
  ],
  chats : [{
    type: Schema.Types.ObjectId,
    ref: 'Chat' 
  }]
});

const Users =   mongoose.models.Users ||  model('Users', userSchema);

export default Users;
