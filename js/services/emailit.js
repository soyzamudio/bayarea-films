angular.module('emailit', [])
.factory('email', ['$http', function($http) {

  function mailgun(key, to, from, message) {
    console.log('In Mailgun');
    console.log(key, to, from, message);
  }

  function mandrill(key, to, from, message, subject, name) {
    var data = {
      'key':     key,
      'message': {
        'from_email': from,
        'to':         [
          {
            'email': to,
            'to':    'to'
          }
        ],
        'autotext': 'true',
        'subject':  name + " - " + subject,
        'html':     message
      }
    }
    return $http.post('https://mandrillapp.com/api/1.0/messages/send.json', data)
  }

  function sendgrid(user, key, to, from, message, subject) {
    return $http.jsonp('https://api.sendgrid.com/api.mail.send.json?api_user='  + user + '&api_key=' + key + '&to=' + to + '&subject=' + subject + '&text=' + message + '&from=' + from);
  }

  function mailjet(key, to, from, message) {
    console.log('In MailJet');
    console.log(key, to, from, message);
  }

  return {mailgun:mailgun, mandrill:mandrill, sendgrid:sendgrid, mailjet:mailjet};
}]);
