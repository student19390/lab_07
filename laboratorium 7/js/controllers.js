//porfolioApp - wyszukiwarka - Gallery:
var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('GalleryListCtrl', function($scope)
{
    $scope.galleries = 
    [
        {
            'title': 'Wacom Cintiq 22',
            'price': '$917',
            'thumbnailUrl': 'img/w1.png'
        },

        {
            'title': 'Wacom Intuos Pro (Small)',
            'price': '$232',
            'thumbnailUrl': 'img/w2.png'
        },

        {
            'title': 'Apple iPad Pro 12.9 (2020)',
            'price': '$949',
            'thumbnailUrl': 'img/w3.png'
        },

        {
            'title': 'Samsung Galaxy Tab S4 ',
            'price': '$550',
            'thumbnailUrl': 'img/w4.png'
        },

        {
            'title': 'Wacom Intuos Pro (Medium)',
            'price': '$289',
            'thumbnailUrl': 'img/w5.png'
        },

        {
            'title': 'Microsoft Surface Book 3 (13.5 inches)',
            'price': '$835',
            'thumbnailUrl':'img/w6.png'
        }
    ];
    
    $scope.sortList = 
    [
        {
            'label': 'Alphabetically',
            'value': 'title'
        },
        {
            'label': 'Low Price',
            'value': 'price'
        },
        {
            'label':'High Price',
            'value':'-price'
        },
    ];
    
});