import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';
import { Tasks } from '../../api/tasks.js';

 
class TodosListCtrl {
   constructor($scope, $http) {
    $scope.viewModel(this);
    this.helpers({
      tasks() {
      	// $http.get('https://www.dropbox.com/s/lw45ftogxxt8xcn/datos.json')
      	// 	.then(function(response){console.log(response);});
      	var data = [

		{
			imagen_url: "https://images.pcel.com/300/Fp1oZi6j8YLChyXC.jpg",
			name: "HP Touch",
			currency: "L",
			cost: 25000.00,
			"description": "Computadora Portatil",
			location: { lat: "14.7450316",lng: "-88.4867637.7"}
		},
		{
			imagen_url: "http://i.ebayimg.com/00/z/rzYAAOxyZwpSVl7u/$(KGrHqRHJ!4FJR,Zm1BcBSVl7uWVcQ~~_32.JPG",
			name: "HP Touch",
			currency: "L",
			cost: 25000.00,
			"description": "Computadora Portatil",
			location: { lat: "14.7450316",lng: "-88.4867637.7"}
		},
      	];
        // return Tasks.find({});
        return data;

      }
    })
  }
}
 
export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: 'imports/components/todosList/todosList.html',
controller: ['$scope', '$http', TodosListCtrl]
  });