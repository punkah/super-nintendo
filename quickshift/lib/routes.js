// where we do our routing

// check for log-in and log-out
// move user to page
//if(Meteor.isClient){
  //  Accounts.onLogin(function() {
  //    FlowRouter.go('recipe-book');
  //  });
  //
  //  Accounts.onLogout(function() {
  //    FlowRouter.go('home');
  //  });
//}


// when a route is being entered
//FlowRouter.triggers.enter([function(context, redirect){
//
//  // if there is no user (ie, not logged in)
//  // send them to the home page
//  if(!Meteor.userId()){
//    FlowRouter.go('home');
//  }
//}]);

FlowRouter.route('/', {
  name: 'home',

  // this will run this funcion when we rout to /home
  action() {

    // if user is logged in, send them to the main
    // recipe-book page
    //if(Meteor.userId()){
    //FlowRouter.go('main');
    //}

    // when we hit the above routepath, use the below template
    //BlazeLayout.render('SplashLayout');
  }

});


//FlowRouter.route('/recipe-book', {
//  name: 'recipe-book',
//
//  // this will run this funcion
//  action() {
//
//    // create a new route
//    // the render below will render main layout
//    // associate with the template 'main' (in mainlayout)
//    // and we associate with that, template 'test'
//    BlazeLayout.render('MainLayout', {main: 'Recipes'});
//  }
//
//});
//
//
//
//FlowRouter.route('/recipe/:_id', {
//  name: 'recipe',
//
//  // this will run this funcion
//  action() {
//
//    // create a new route
//    // the render below will render main layout
//    // associate with the template 'main' (in mainlayout)
//    // and we associate with that, template 'test'
//    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
//  }
//
//});
//
//FlowRouter.route('/favourites', {
//  name: 'favourites',
//  action(){
//
//    // render main layout, and in the main section of that
//    //
//    BlazeLayout.render('MainLayout', {main: 'Favourites'});
//  }
//});
//
//
//FlowRouter.route('/shopping-list', {
//  name: 'shopping-list',
//  action(){
//
//    // render main layout, and in the main section of that
//    //
//    BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
//  }
//});
//
//
//FlowRouter.route('/account', {
//  name: 'account',
//  action(){
//
//    // render main layout, and in the main section of that
//    //
//    BlazeLayout.render('MainLayout', {main: 'Account'});
//  }
//});
//
//
//FlowRouter.route('/addRecipe', {
//  name: 'addRecipe',
//  action(){
//
//    // render main layout, and in the main section of that
//    //
//    BlazeLayout.render('MainLayout', {main: 'AddRecipe'});
//  }
//});
//
//
//
//FlowRouter.route('/upload', {
//  name: 'upload',
//  action(){
//
//    // render main layout, and in the main section of that
//    //
//    BlazeLayout.render('MainLayout', {main: 'upload'});
//  }
//});
//
//FlowRouter.route('/checklist', {
//  name: 'checklist',
//
//  // this will run this funcion
//  action() {
//
//    // create a new route
//    // the render below will render main layout
//    // associate with the template 'main' (in mainlayout)
//    // and we associate with that, template 'test'
//    BlazeLayout.render('MainLayout', {main: 'CheckList'});
//  }
//
//});
