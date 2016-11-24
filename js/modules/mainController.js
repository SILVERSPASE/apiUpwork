app.controller('mainCtrl', function($scope, $dataStorage) {
	$scope.jobList = $dataStorage.getJobList();
	$scope.jobListKeys = Object.keys($scope.jobList);
	$scope.leftFilter = $dataStorage.getLeftFilter();

	$scope.usedFilter = {};

	$scope.clickLeftFilter = function(filterKey, filterPointValue){
		if(!$scope.usedFilter[filterKey]){
			$scope.usedFilter[filterKey] = {};
		}
		if(!$scope.usedFilter[filterKey][filterPointValue]) {
			$scope.usedFilter[filterKey][filterPointValue] = true;
		} else {
			delete $scope.usedFilter[filterKey][filterPointValue];
			
			if(Object.keys($scope.usedFilter[filterKey]).length === 0){
				delete $scope.usedFilter[filterKey];
			}
		}
	}

	$scope.showReset = function(){
		return Object.keys($scope.usedFilter).length === 0 ? false : true;
	}
});
