TwitterBrowser.EnterUserNameView = SC.TextField.extend({
  insertNewline: function() {
    TwitterBrowser.statechart.sendEvent('searchForUser', this.get('value'));
  }
});
