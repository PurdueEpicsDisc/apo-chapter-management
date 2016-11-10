Buffers = new Mongo.Collection('buffers');

Buffers.attachSchema(new SimpleSchema({
  username: {
    type: String,
    label: "Username"
  },
  email: {
    type: String,
    label: "Email",
    regEx: SimpleSchema.RegEx.Email
  },
  password: {
    type: String,
    label: "Password",
    max: 200,
    min: 6
  }
}));


if (Meteor.isServer) {
  Buffers.allow({
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