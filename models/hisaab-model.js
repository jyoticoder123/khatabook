const mongoose = require("mongoose");

const hisaabSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minLength: 3,
      maxLenght: 20,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    encrypted: {
      type: Boolean,
      default: false,
    },
    shareable: {
      type: Boolean,
      default: false,
    },
    passcode: {
      type: String,
      // type: Boolean,
      default: false,
    },
    editpermissions: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("hisaab", hisaabSchema);
