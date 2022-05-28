const mongoose = require("mongoose");

const whiteCollarReqSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    uni_name: {
      type: String,
      required: true,
    },
    program: {
      type: String,
      required: true,
    },
    cnic: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
    },
    DOB: {
      type: Date,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    fName: {
      type: String,
      required: true,
    },
    fCnic: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
    },
    gross_monthly_income: {
      type: Number,
      required: true,
    },
    matric_year: {
      type: Number,
      required: true,
    },
    matric_institute: {
      type: String,
      required: true,
    },
    matric_percentage: {
      type: Number,
      required: true,
    },
    matric_type: {
      type: String,
    },
    matric_expenses: {
      type: Number,
      required: true,
    },
    intermediate_year: {
      type: Number,
      required: true,
    },
    intermediate_institute: {
      type: String,
      required: true,
    },
    intermediate_percentage: {
      type: Number,
      required: true,
    },
    intermediate_type: {
      type: String,
    },
    intermediate_expenses: {
      type: Number,
      required: true,
    },
    family_members: {
      type: Number,
      required: true,
    },
    earning_hands: {
      type: Number,
      required: true,
    },
    studying_siblings: {
      type: Number,
      required: true,
    },
    total_expenditure: {
      type: Number,
      required: true,
    },
    property_type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const whiteCollarReq = mongoose.model("whiteCollarReq", whiteCollarReqSchema);
module.exports = whiteCollarReq;
