sc_require('controllers/users_controller');

TwitterBrowser.statechart = SC.Statechart.create({
  initialState: 'searchForUserName',

  searchForUserName: SC.State.extend({
    enterState: function() {
      this.set('pane', SC.TemplatePane.append({layerId: 'twitter_browser', templateName: 'twitter_browser'}));
    },

    exitState: function() {
      this.get('pane').remove();
    },

    searchForUser: function(userName) {
      var recordArray = TwitterBrowser.store.find(SC.Query.local(TwitterBrowser.User, "userName = '" + userName + "'", {userName: userName}));
      TwitterBrowser.usersController.set('content', recordArray);
      this.gotoState('displayUserProfile');
    },
  }),

  displayUserProfile: SC.State.extend({
    enterState: function() {
      this.set('pane', SC.TemplatePane.append({layerId: 'user_browser', templateName: 'user_display'}));
    },

    exitState: function() {
      this.get('pane').remove();
    },

    backToSearch: function() {
      this.gotoState('searchForUserName');
    }
  })
});
