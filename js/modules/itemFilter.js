
app.filter('tabFilter',function() {
	 return function(jobListKeys, usedTab, jobList){
	 	return jobListKeys.filter(function(oneJobKey){
	 		// console.log(usedTab);
	 		return	Object.keys(usedTab).every(function(filterKey){
	 			if (filterKey == 1){
		 			return true;
	 			}
	 			return jobList[oneJobKey].job_state.indexOf(filterKey) !== -1;
	 		})
	 	})
	 }
});

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

