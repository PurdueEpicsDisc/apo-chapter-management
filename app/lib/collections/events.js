Events = new Mongo.Collection('events');

Participant = new Mongo.Collection('participant');

Participant.attachSchema(new SimpleSchema({
  
  id : {
    type: String,
    label: "Participant ID",
    optional: false
  }
  
  
}));

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
  participants: {
    
    type: [Participant]
  },
  
  startDate:
  {
    type: Date,
    label: "Start Date",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    },
    optional: true
  },
  endDate:
  {
    type: Date,
    label: "End Date",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    },
    optional: true
  },
  shifts: {
    type: Array,
    label: "Shifts",
    optional: true
  },
  'shifts.$': {
    type: Object,
    optional: true
  },
  'shifts.$.startDate': {
    type: Date,
    label: "Start Date",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    },
    optional: true
  },
  'shifts.$.endDate': {
    type: Date,
    label: "End Date",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    },
    optional: true
  },

  createdBy: {
    type: String,
    autoValue: function() {
    return this.userId
  },
  
  
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
