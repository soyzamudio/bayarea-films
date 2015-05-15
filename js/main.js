angular.module('BayareaApp', ['emailit'])
.controller('HomeController', ['$scope', '$timeout', 'email', function($scope, $timeout, email) {

  $scope.successful = false;

  $scope.videos = [
    {description: 'Startups pitching to investors at Ruby Skye in SF.', url: 'https://www.youtube.com/watch?v=wJ5MCm96qtU', provider: 'youtube'},
    {description: 'A promo video for a hackathon. Ask me for the password to see this video', url: 'https://vimeo.com/126532210', provider: 'vimeo'},
    {description: 'I created this video for GutterPatrol & WindowShine. It is currently in use on their Yelp page', url: 'https://vimeo.com/90470946', provider: 'vimeo'},
    {description: 'A 2 min video about a guy using Stylematic to get the girl.', url: 'https://www.youtube.com/watch?v=QxMwQzZCXic', provider: 'youtube'}
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
