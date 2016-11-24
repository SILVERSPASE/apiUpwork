// app.filter('itemFilter',function() {
// 	return function(jobListKeys, usedFilter, jobList){
// 		return jobListKeys.filter(function(oneJobKey) {
// 			return Object.keys(usedFilter).every(function(filterCatKey){
// 				return Object.keys(usedFilter[filterCatKey]).some(function(pointKey) {
// 					return jobList[oneJobKey][filterCatKey].indexOf(pointKey) !== -1;
// 				});
// 			});
// 		});
// 	}
// });


app.filter('tabFilter',function() {
	 return function(jobListKeys, usedTab, jobList){
	 	return jobListKeys.filter(function(oneJobKey){
	 		// console.log(usedTab);
	 		return	Object.keys(usedTab).every(function(filterKey){
	 			console.log(jobList[oneJobKey].status);
	 			console.log(filterKey);
	 			console.log(jobList[oneJobKey].status.indexOf(+filterKey) !== -1);
	 			return jobList[oneJobKey].status.indexOf(filterKey) !== -1;
	 		})
	 	})
	 }
});