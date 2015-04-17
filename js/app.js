angular.module('BayareaApp', [])
.controller('HomeController', ['$scope', function($scope) {
  $scope.videos = [
    {description: 'Enim quis commodo non ad occaecat consequat laborum ullamco ex.', url: 'https://vimeo.com/93715935', provider: 'vimeo'},
    {description: 'Exercitation sunt reprehenderit nulla magna dolore elit laboris incididunt velit excepteur.', url: 'https://vimeo.com/90470946', provider: 'vimeo'},
    {description: 'Enim nisi est commodo sit dolore pariatur dolor ex cupidatat magna id labore ea ullamco.', url: 'https://vimeo.com/90433308', provider: 'vimeo'},
    {description: 'Id dolore commodo veniam officia fugiat incididunt ad.', url: 'https://www.youtube.com/watch?v=O6llByH8K8c', provider: 'youtube'},
  ];
}]);
