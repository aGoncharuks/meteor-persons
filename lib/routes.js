FlowRouter.route('/', {
  name: 'persons-list',
  action() {
    BlazeLayout.render('MainLayout', {main: 'PersonsList'});
  }
});

FlowRouter.route('/new-person', {
  name: 'new-person',
  action() {
    BlazeLayout.render('MainLayout', {main: 'NewPerson'});
  }
});

FlowRouter.route('/edit-person/:id', {
  name: 'edit-person',
  action() {
    BlazeLayout.render('MainLayout', {main: 'EditPerson'});
  }
});
