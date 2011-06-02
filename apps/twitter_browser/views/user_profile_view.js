TwitterBrowser.UserProfileView = SC.TemplateView.extend({
  templateName: 'user_profile',
  contentBinding: 'TwitterBrowser.userController',
  imageUrlBinding: 'TwitterBrowser.userController.profileImageUrl',
  profileImageUrl: function() {
    var url = this.get('imageUrl');
    return url ? url.replace('_normal', '_reasonably_small') : '';
  }.property('imageUrl').cacheable(),
});
