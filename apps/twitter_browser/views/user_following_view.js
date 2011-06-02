TwitterBrowser.UserFollowingView = SC.TemplateCollectionView.extend({
  contentBinding: 'TwitterBrowser.followingUsersController',
  itemView: SC.TemplateView.extend({
    templateName: 'user_following'
  })
});
