TwitterBrowser.usersController = SC.ObjectController.create({
  user: function() {
    return this.get('content') ? this.get('content').objectAt(0) : undefined;
  }.property('status').cacheable()
});
