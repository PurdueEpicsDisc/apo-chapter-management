Profiles = new Mongo.Collection('profiles');

Profiles.attachSchema(new SimpleSchema({
  firstName:{
    type: String,
    label: "First Name",
    max: 200,
    optional: true
  },
  lastName:{
    type: String,
    label: "Last Name",
    max: 200,
    optional: true
  },
  gender:{
    type: String,
    label: "Gender",
    allowedValues: ["Male","Female","Other"],
    optional: true
  },
  email:{
    type: String,
    label: "Email",
    max: 200,
    optional: true
  },
  phoneNumber:{
    type: String,
    label: "Phone Number",
    max: 200,
    optional: true
  },
  status:{
    type: String,
    label: "Status",
    allowedValues: ["Active","Inactive"],
    optional: true
  },
  pledgeClass:{
    type: String,
    label: "Pledge Class",
    max: 200,
    optional: true
  },
  nationalId:{
    type: String,
    label: "National ID",
    max: 200,
    optional: true
  },
  positions:{
    type: String,
    label: "Positions",
    max: 200,
    optional: true
  },
  awards:{
    type: String,
    label: "Awards",
    max: 1024,
    optional: true
  },
  hours:{
    type: String,
    label: "Hours",
    max: 1024,
    optional: true
  },
  userId:
  {
    type: String,
    label: "User ID",
    optional: true
  },
  createdBy: {
    type: String,
    autoValue: function() {
    return this.userId
  }
}}));


if (Meteor.isServer) {
  Profiles.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}