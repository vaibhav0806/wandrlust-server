const { mongoose } = require("mongoose");

const {
  NAME_REQUIRED,
  PHONE_REQUIRED,
  EMAIL_REQUIRED,
  USERNAME_REQUIRED,
  PASSWORD_REQUIRED,
  AGE_REQUIRED,
} = require("../errors/mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, NAME_REQUIRED],
    },
    phone: {
      type: Number,
      required: [true, PHONE_REQUIRED],
      unique: true,
    },
    email: {
      type: String,
      required: [true, EMAIL_REQUIRED],
      unique: true,
    },
    username: {
      type: String,
      required: [true, USERNAME_REQUIRED],
      unique: true,
    },
    password: {
      type: String,
      required: [true, PASSWORD_REQUIRED],
      unique: false,
    },
    profileImage: {
      type: String,
    },
    age: {
      type: Number,
      required: [true, AGE_REQUIRED],
    },
    about:{
      type: String
    },
    gender: {
      type: String,
      required: false,
    },
    blocked: {
      type: Boolean,
      default: false,
      required: false,
    },
    followers: {
      type: [mongoose.Schema.Types.ObjectId],
      default : [],
    },
    following: {
      type: [mongoose.Schema.Types.ObjectId],
      default : [],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
