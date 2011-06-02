TwitterBrowser.BackToSearchView = SC.TemplateView.extend({
  mouseUp: function(evt) {
    TwitterBrowser.statechart.sendEvent('backToSearch');
  }
})
