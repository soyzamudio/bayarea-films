angular.module('BayareaApp', ['emailit'])
.controller('HomeController', ['$scope', 'email', '$timeout', function($scope, email, $timeout) {

  $scope.successful = false;

  $scope.videos = [
    {description: 'I created this video for GutterPatrol & WindowShine. It is currently in use on their Yelp page', url: 'https://vimeo.com/90470946', provider: 'vimeo'},
    {description: 'A promo video for a hackathon. Ask me for the password to see this video', url: 'https://vimeo.com/126532210', provider: 'vimeo'},
    {description: 'Enim nisi est commodo sit dolore pariatur dolor ex cupidatat magna id labore ea ullamco.', url: 'https://www.youtube.com/watch?v=wJ5MCm96qtU', provider: 'youtube'},
    {description: 'Id dolore commodo veniam officia fugiat incididunt ad.', url: 'https://www.youtube.com/watch?v=O6llByH8K8c', provider: 'youtube'},
  ];

  $scope.sendEmail = function(form) {
    email.mandrill('Zt9VJPNzZOrqVhOrUH3-Uw', 'benhalverson33@gmail.com', form.email, form.message, form.subject, form.name)
    .then(function(response) {
      $scope.successful = true;
      $timeout(clear, 3000);
    });
  };

  function clear() {
    $scope.successful = false;
    $scope.form.name = $scope.form.email = $scope.form.subject =$scope.form.message = '';
  }

}]);
