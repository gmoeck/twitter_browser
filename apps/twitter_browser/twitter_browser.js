// ==========================================================================
// Project:   TwitterBrowser
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals TwitterBrowser */

TwitterBrowser = SC.Application.create({
  store: SC.Store.create().from('TwitterBrowser.TwitterDataSource')
});

SC.ready(function() {
  TwitterBrowser.statechart.initStatechart();
});

window.main = function() {
}
