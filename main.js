if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
    //Registration was successfull
    console.log("ServiceWorker registration successful with scope: ", registration.scope);
    registration.pushManager.subscribe({userVisibleOnly: true})
      .then(function(subscription) {
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

function sendSubscriptionToServer(subscription) {
  // TODO: Send the subscription.endpoint
  // to your server and save it to send a
  // push message at a later date
  //
  // For compatibly of Chrome 43, get the endpoint via
  // endpointWorkaround(subscription)
  console.log('TODO: Implement sendSubscriptionToServer()');

  // var mergedEndpoint = endpointWorkaround(subscription);

  // This is just for demo purposes / an easy to test by
  // generating the appropriate cURL command
  // showCurlCommand(mergedEndpoint);
}
