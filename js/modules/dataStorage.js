app.service('$dataStorage', function () {
	var jobList = JSON.parse('[{"posted":" year","job_type":"Fixed","budget":0,"level":"1","country":"United States", "job_state":"1"},	{"posted":" year","job_type":"Hourly","budget":0,"level":"2","country":"United States", "job_state":"3"},	{"posted":" year","job_type":"Hourly","budget":0,"level":"3","country":"Lithuania", "job_state":"2"}, {"posted":" year","job_type":"Fixed","budget":800,"level":"3","country":"United States", "job_state":"2"},	{"posted":" year","job_type":"Hourly","budget":0,"level":"3","country":"Guatemala", "job_state":"4"}]');
			// {"posted":" year","job_type":"Fixed","budget":150,"level":"3","country":"United States"},	{"posted":" year","job_type":"Hourly","budget":0,"level":"1","country":"United Kingdom"},	{"posted":" year","job_type":"Fixed","budget":100,"level":"3","country":"United Kingdom"},	{"posted":" year","job_type":"Hourly","budget":0,"level":"2","country":"United States"},	{"posted":" year","job_type":"Hourly","budget":0,"level":"2","country":"Canada"},	{"posted":" year","job_type":"Hourly","budget":0,"level":"2","country":"Canada"},	{"posted":" year","job_type":"Fixed","budget":700,"level":"","country":"United States"},	{"posted":" year","job_type":"Fixed","budget":30,"level":"2","country":"United States"},	{"posted":" year","job_type":"Fixed","budget":300,"level":"1","country":"Belarus"},	{"posted":" year","job_type":"Fixed","budget":15,"level":"2","country":"Israel"},	{"posted":" year","job_type":"Fixed","budget":5,"level":"1","country":"United States"},	{"posted":" year","job_type":"Hourly","budget":0,"level":"2","country":"United States"},	{"posted":" year","job_type":"Hourly","budget":0,"level":"2","country":"United States"},	{"posted":" year","job_type":"Hourly","budget":0,"level":"2","country":"United States"},{"posted":" year","job_type":"Fixed","budget":750,"level":"2","country":"United States"}]');

	this.getJobList = function(){
		return jobList; 
	}

	var leftFilter = {
		// "Query": {
		// 	1: "PHP",
		// 	2: "Wordpress",
		// 	3: "Angular"
		// },
		"level": {
			name: "Level",
			points: {
				1: "1",
				2: "2",
				3: "3"
			}
		},
		"job_type": {
			name: "Job type",
			points: {
				1: "Hourly",
				2: "Fixed"
			}
		}
	}

	this.getLeftFilter = function(){
		return leftFilter;
	}

	var topTabs = {
		1: {name: "All"},
		2: {name: "New"},
		3: {name: "Unsuitible"},
		4: {name: "Bided"}
	}

	this.getTopTabs = function(){
		return topTabs;
	}

});
