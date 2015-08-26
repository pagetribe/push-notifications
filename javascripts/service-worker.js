if ('serviceWorker in navigator') {
  navigator.serviceWorker.register('/javascripts/service-worker.js').then(function(registration) {
    //Registration was successfull
    console.log("ServiceWorker registration successful with scope: ", regitstration.scope);
    registration.pushManager.subscribe().then(function(subscription){
      isPushEnabled = true;
      console.log("subscription.subcriptionId: ", subscription.subscriptionId);
      console.log("subscription.endpoint: ", subscription.endpoint);
      
      //TODO: Send the subscription subscription.endpoint
      //to your server and save it to tsend a push message and a later date

      return sendSubscriptionToServer(subscription);
    });
  }).catch(function(err) {
    // registration failed
    console.log('ServiceWorker registration failed: ', err);
  });
}
