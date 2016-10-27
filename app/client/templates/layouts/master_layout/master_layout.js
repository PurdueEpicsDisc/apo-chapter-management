Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
});


Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-admin': function(event) {
        Router.go('admin');
    }
});