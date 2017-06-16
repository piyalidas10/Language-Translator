var app = angular.module('langtranslator', []);

app.controller('mainCtrl', function($scope,$http) {
			

			$http({
				method:'GET', 
				url:'JSON/languages.json'
			})
			.success(function(response){
				$scope.langs = response;
				$scope.selectlang = $scope.langs[0]; 
				
				
				$scope.changejson=function(){
						$http({
								method:'GET', 
								url:$scope.link
						})
						.success(function(response){
								$scope.content = response;
						});
				}

				$scope.selectedItems = response[0].value;
				$scope.link = 'JSON/content-'+$scope.selectedItems+'.json';
				console.log($scope.link);
				$scope.changejson();

				$scope.changelan = function(val){
					$scope.selectedItems = val.value;
					console.log($scope.selectedItems);
					$scope.link = 'JSON/content-'+$scope.selectedItems+'.json';
					$scope.changejson();
				}

				
					

			});
			
			
			
			
 
});
