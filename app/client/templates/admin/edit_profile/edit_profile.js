Template.EditProfile.events({
});
Template.EditProfile.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      var user = Meteor.users.find({id: doc.userId});
      if (confirm('Really delete issue: "' + doc.title + '"?')) {
        Meteor.users.remove({_id: doc.userId});
        this.remove();
        console.log(doc.userId);
        Router.go('profilesList');
      }
    };
  }
});

AutoForm.hooks({
  editProfileForm: {
    onSuccess: function(doc) {
      Router.go('profilesList');
    }
  }
});