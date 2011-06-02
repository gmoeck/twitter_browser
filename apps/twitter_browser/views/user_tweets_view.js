TwitterBrowser.UserTweetsView = SC.TemplateCollectionView.extend({
  contentBinding: 'TwitterBrowser.tweetsController',
  userBinding: 'TwitterBrowser.userController',
  itemView: SC.TemplateView.extend({
    templateName: 'user_tweets'
  })
});
