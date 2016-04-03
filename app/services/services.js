angular.module("songApp.services", [])

.factory('ListAllGenresService', function ($resource) {
    return $resource('http://104.197.128.152:8000/v1/genres');
});

// .factory('GetGenresByIdService', function ($resource) {
//     return $resource('http://104.197.128.152:8000/v1/:id', {id: @id});
// })
