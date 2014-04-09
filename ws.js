Players = new Meteor.Collection('players');

if (Meteor.isClient) {
  var STROKE_WIDTH = 4;
  getCircleSizeByPoints = function(points){
    return points * 2;
  }

  Template.playerList.helpers({
    players: function() {
      return Players.find({}, {sort: {points: -1}});
    }
  });

  Template.player.helpers({
    circleSize: function() {
      return (getCircleSizeByPoints(this.points) + STROKE_WIDTH * 2) + 'px'
    },
    circleCx: function(){
      return ((getCircleSizeByPoints(this.points) + STROKE_WIDTH * 2) / 2) + 'px'
    },
    circleCy: function(){
      return ((getCircleSizeByPoints(this.points) + STROKE_WIDTH * 2) / 2) + 'px'
    },
    circleRadius: function(){
      return ((getCircleSizeByPoints(this.points)) / 2) + 'px'
    },
    strokeWidth: function() { return STROKE_WIDTH + 'px'; }
  })

  Template.player.events({
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
