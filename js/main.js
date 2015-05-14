angular.module('BayareaApp', ['emailit'])
.controller('HomeController', ['$scope', '$timeout', 'email', function($scope, $timeout, email) {

  $scope.successful = false;

  $scope.videos = [
    {description: 'I created this video for GutterPatrol & WindowShine. It is currently in use on their Yelp page', url: 'https://vimeo.com/90470946', provider: 'vimeo'},
    {description: 'A promo video for a hackathon. Ask me for the password to see this video', url: 'https://vimeo.com/126532210', provider: 'vimeo'},
    {description: 'Enim nisi est commodo sit dolore pariatur dolor ex cupidatat magna id labore ea ullamco.', url: 'https://vimeo.com/90433308', provider: 'vimeo'},
    {description: 'Id dolore commodo veniam officia fugiat incididunt ad.', url: 'https://www.youtube.com/watch?v=O6llByH8K8c', provider: 'youtube'},
  ];

  $scope.sendEmail = function(form) {
    email.mandrill('Zt9VJPNzZOrqVhOrUH3-Uw', 'jose@josezamudio.me', form.email, form.message, form.subject, form.name)
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
