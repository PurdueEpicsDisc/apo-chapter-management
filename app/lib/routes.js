Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/login', {
  name: 'login',
  controller: 'LoginController',
  where: 'client'
});

Router.route('/rush', {
  name: 'rush',
  controller: 'RushController',
  where: 'client'
});

Router.route('/events', {
  name: 'events',
  controller: 'EventsController',
  where: 'client'
});

Router.route('/gallery', {
  name: 'gallery',
  controller: 'GalleryController',
  where: 'client'
});

Router.route('/LFS_Program', {
  name: 'lfs',
  controller: 'LFSController',
  where: 'client'
});

Router.route('/about', {
  name: 'about',
  where: 'client'
});

Router.route('/profile', {
  name: 'profile',
  where: 'client'
});

Router.route('/insert_event', {
  name: 'insertEvent',
  controller: 'EventsAdminController',
  action: 'insert',
  where: 'client'
});

Router.route('/insert_profile', {
  name: 'insertProfile',
  controller: 'ProfilesController',
  action: 'insert',
  where: 'client'
});


Router.route('/events_list', {
  name: 'eventsList',
  controller: 'EventsAdminController',
  action: 'list',
  where: 'client'
});

Router.route('/profiles_list', {
  name: 'profilesList',
  controller: 'ProfilesController',
  action: 'list',
  where: 'client'
});

Router.route('/users_list', {
  name: 'usersList',
  controller: 'UsersController',
  action: 'list',
  where: 'client'
});


Router.route('/event/:_id', {
  name: 'editEvent',
  controller: 'EventsAdminController',
  action: 'edit',
  where: 'client'
});

Router.route('/profile/:_id', {
  name: 'editProfile',
  controller: 'ProfilesController',
  action: 'edit',
  where: 'client'
});

Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    this.render('AccessDenied');
  } else
  {
    this.next();
  }
}, {only: ['eventsList', 'insertEvent', 'profilesList', 
            'insertProfile','usersList','insertUser']
});