Events = new Mongo.Collection('events');

Events.attachSchema(new SimpleSchema({
  name:{
    type: String,
    label: "Name",
    max: 200
  },
  location:{
    type: String,
    label: "Location",
    max: 1024
  },
  startDate:
  {
    type: Date,
    label: "Start Date",
    optional: true
  },
  endDate:
  {
    type: Date,
    label: "End Date",
    optional: true
  },
  createdBy: {
    type: String,
    autoValue: function() {
    return this.userId
  }
}}));


if (Meteor.isServer) {
  Events.allow({
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
