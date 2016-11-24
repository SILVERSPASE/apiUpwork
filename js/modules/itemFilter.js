app.filter('itemFilter',function() {
	return function(jobListKeys, usedFilter, jobList){
		return jobListKeys.filter(function(oneJobKey) {
			return Object.keys(usedFilter).every(function(filterCatKey){
				return Object.keys(usedFilter[filterCatKey]).some(function(pointKey) {
					return jobList[oneJobKey][filterCatKey].indexOf(pointKey) !== -1;
				});
			});
		});
	}
});