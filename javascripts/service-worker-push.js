self.addEventListenter('push', function(event) {
  debugger;
  console.log('Received a push message', event);

  var title = 'Notification';
  var body = 'There is a new update available on the site. Click to see more.';
  var icon = 'https://raw.githubusercontent.com/deanhume/typography/gh-pages/icons/typography.png';
  var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
   );
});
