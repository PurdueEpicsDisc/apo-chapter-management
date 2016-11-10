/*****************************************************************************/
/* InsertProfile: Event Handlers */
/*****************************************************************************/
Template.InsertProfile.events({
});

/*****************************************************************************/
/* InsertProfile: Helpers */
/*****************************************************************************/
Template.InsertProfile.helpers({
});

// Profiles.after.insert(function(userId,doc) {
// });

Buffers.after.insert(function(userId,doc) {
    console.log(doc._id);
    console.log(doc._id);
	var buf = Buffers.findOne({_id: doc._id});
	console.log(buf);
        Meteor.call('createUserFromAdmin',buf.email,buf.password,buf.username,function(err,result){
            if(!err) {
                var userI = Meteor.users.findOne({username: buf.username});
                Profiles.insert({userId: userI._id, email: buf.email});
                Buffers.remove({_id: doc._id});
                Notifications.success("Created User: ", buf.username);
            }
            else{
                Buffers.remove({_id: doc._id});
                Notifications.error("Error",err.message);
            }
        });
});


/*****************************************************************************/
/* InsertProfile: Lifecycle Hooks */
/*****************************************************************************/
Template.InsertProfile.onCreated(function () {
});

Template.InsertProfile.onRendered(function () {

});

Template.InsertProfile.onDestroyed(function () {
});
