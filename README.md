# Language-Translator

In this select box, i am fetching the lists of languages that were coming from languages.json file. 

    <select class="form-control" ng-model="selectlang" ng-options="lang.name for lang in langs track by lang.value" ng-change="changelan(selectlang)">
				</select>

in this select box, ng-init will not work because it is called before json file load. so i have initialized the select box with first value of json data in app.js.

      $scope.selectlang = $scope.langs[0];

I have used "track by lang.value" to show languages.json file's value, otherwise select box option value will show object.

      ng-options="lang.name for lang in langs track by lang.value"      

Get the selected option value using changelan function and pass selectlang value through this function. This selectlang value is kept in selectedItems variable and passing this variable to $scope.link, we can access the json file of selected language. Then call again changejson() function to change the json file.

    ng-change="changelan(selectlang)"
    
    
    $scope.changelan = function(val){
					$scope.selectedItems = val.value;
					console.log($scope.selectedItems);
					$scope.link = 'JSON/content-'+$scope.selectedItems+'.json';
					$scope.changejson();
		  }


The name of json files are given like content-ben.json, content-en.json, content-hi.json.
