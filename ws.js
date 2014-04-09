Players = new Meteor.Collection('players');

if (Meteor.isClient) {

  Template.playerList.helpers({
    players: function() {
      return Players.find({}, {sort: {points: -1}});
    }
  });

  Template.playerTableRow.events({
    'click button': function(evt, tpl) {
      Players.update({_id: this._id}, {$inc: {points: 1}});
    }
  })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Players.remove({});
    Players.insert({name: 'Manuel', points: 5});
    Players.insert({name: 'Nina', points: 8});
    // code to run on server at startup
  });
}
