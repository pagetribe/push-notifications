self.addEventListener('notificationclick', function(event){
  console.log('On notificaction click: ', event.notification.tag);
  //Andorid doesnt close the notification when you click it
  event.notification.close();

  //this looks to see if the current is already open and focuses it if it is
  event.waitUntil(
    clients.matchAll({
      type: "window"
    })
    .then(function(clientList){
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url == '/' && 'focus' in client){
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.opentWindow('http://www.google.com.au');
      }
    })
  );
});
