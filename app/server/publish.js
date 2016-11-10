Meteor.publish('events', function (userId) {
 return Events.find({});
});

Meteor.publish('profiles', function (userId) {
 return Profiles.find({});
});

Meteor.publish('users', function (userId) {
 return Meteor.users.find({});
});

Meteor.publish('buffers', function (userId) {
 return Buffers.find({});
});

