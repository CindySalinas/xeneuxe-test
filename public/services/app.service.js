angular.module('app.services', [])
  .service('ApiRequests', ['$http', '$q', function($http, $q) {
    var baseUrl = 'http://localhost:8080/api/';

    function getUsers() {
      var url = baseUrl + 'users';
      var defer = $q.defer();
      $http.get(url)
        .then(function(res) { defer.resolve(res.data) })
        .catch(function(err) { defer.reject(err.data) });
      return defer.promise;
    };

    function saveUser(data) {
      var url = baseUrl + 'users';
      var defer = $q.defer();
      $http.post(url, data)
        .then(function(res) { defer.resolve(res.data) })
        .catch(function(err) { defer.reject(err.data) });
      return defer.promise;
    }

    return {
      getUsers: getUsers,
      saveUser: saveUser
    };
  }]);