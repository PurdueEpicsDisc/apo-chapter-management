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