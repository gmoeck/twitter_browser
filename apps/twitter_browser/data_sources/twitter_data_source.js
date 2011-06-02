TwitterBrowser.TwitterDataSource = SC.DataSource.extend({
  fetch: function(store, query) {
    var userName = query.get('parameters').userName;
    SC.Request.getUrl('user/' + userName).header({'Accept': 'application/json'}).json().notify(this, 'gotUserInformation', store, query).send();
    return YES;
  },

  gotUserInformation: function(response, store, query) {
    TwitterBrowser.store.loadRecord(TwitterBrowser.User, response.get('body'));
    store.dataSourceDidFetchQuery(query);
  }
});
