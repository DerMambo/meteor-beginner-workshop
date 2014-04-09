if (Meteor.isClient) {
  Session.setDefault('name', 'Anonymus');
  Session.setDefault('color', 'black');

  Template.hello.greeting = function () {
    return 'Hello ' + Session.get('greet');
  };

  Template.hello.color = function() {
    return Session.get('color');
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
