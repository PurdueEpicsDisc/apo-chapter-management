Events = new Mongo.Collection('events');


Events.attachSchema(new SimpleSchema({
  
  name : {
		type: String,
		label: "Name"
	},
	
	date: {
		type: String,
	},
	
	eventType: {
		type: String,
	},
	
	desc: {
		type: String,
		label: "Description",
		optional: true
	},	
  
  
}));

if (Meteor.isServer) {
  
  Events.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Events.deny({
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
