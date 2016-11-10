Template.ProfilesList.events({
});
Template.ProfilesList.helpers({
  profiles: function () {
    return Profiles.find();
  },
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      var user = Meteor.users.find({_id: doc.userId});
      if (confirm('Really delete issue: "' + doc.title + '"?')) {
        console.log(doc.userId);
        Meteor.users.remove({_id: doc.userId});
        this.remove();
        console.log(doc.userId);
        Router.go('profilesList');
      }
    };
  }
});

/*****************************************************************************/
/* EventsList: Lifecycle Hooks */
/*****************************************************************************/
Template.ProfilesList.onCreated(function () {
});

Template.ProfilesList.onRendered(function () {
});

Template.ProfilesList.onDestroyed(function () {
});
