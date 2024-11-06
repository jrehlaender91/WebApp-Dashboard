// Charts variables
const dailyCanvas = document.getElementById("bars");
const mobileCanvas = document.getElementById("pie");
const alertBanner = document.getElementById("alert");
const chartOption = document.querySelector(".traffic-nav");

// Form variables
const username = document.getElementById("fname");
const message = document.getElementById("message");
const sendButton = document.getElementById("send");

// Notifications variables
const bell = document.querySelector(".notification");
const notification = document.querySelector(".notifications-dropdown");
const circle = document.querySelector(".circle-notification");

// Settings variables
const sendNotifications = document.querySelector(".send-email");
const setProfilePublic = document.querySelector(".public");
const select = document.querySelector("#timezone");
const selectOption = select.options[select.selectedIndex];
const save = document.querySelector(".save");
const cancel = document.querySelector(".cancel");


// Local Storage
save.addEventListener('click', () => {
	const settings = getSettings();
	const timezoneValue = select.value;
	const sendChecked = sendNotifications.checked;
	const profileChecked = setProfilePublic.checked;

	settings.push(timezoneValue);
	settings.push(sendChecked);
	settings.push(profileChecked);

	// Set local storage item
	localStorage.setItem('time', JSON.stringify(settings));
});

cancel.addEventListener('click', () => {
	localStorage.clear();
});

setSelect();

function setSelect() {
	const settings = getSettings();
	const savedProfileChecked = settings[settings.length - 1];
	const savedSendChecked = settings[settings.length - 2];
	const savedTimezone = settings[settings.length - 3];

	select.value = savedTimezone;
	sendNotifications.checked = savedSendChecked;
	setProfilePublic.checked = savedProfileChecked;

	console.log("timezone: " + savedTimezone);
	console.log("send: " + savedSendChecked);
	console.log("profile: " + savedProfileChecked);
}

function getSettings() {
	const select = localStorage.getItem('time');
	if (select) {
		console.log(JSON.parse(select));
		return JSON.parse(select);
	}
	return [];
}


// Alert banner listener
alertBanner.innerHTML =
	`<div class="alert-banner" id="alert">
    <span class="bold">Alert:</span> You have unread messages <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  </div>`;

alertBanner.addEventListener('click', e => {
	const element = e.target;
	if (element.classList.contains("alert-banner-close")) {
		alertBanner.style.display = "none";
	}
});

// Notification listener
bell.addEventListener('click', () => {
	circle.style.display = "none";

	if (notification.style.display === "none") {
		notification.style.display = "inherit";
	} else {
		notification.style.display = "none";
	}
});

// Form listener
sendButton.addEventListener('click', () => {
	if (username.value === "" && message.value === "") {
		alert("Please fill out user and message fields before sending");
	} else if (username.value === "") {
		alert("Please fill out user field before sending");
	} else if (message.value === "") {
		alert("Please fill out message field before sending");
	} else {
		alert(`Message successfully sent to: ${username.value}`);
	}
});

// Traffic chart
Chart.defaults.elements.point.radius = 5;

let trafficData = {
	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
		"4-10", "11-17", "18-24", "25-31"
	],
	datasets: [{
		data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
			2500
		],
		backgroundColor: 'rgba(116, 119, 191, .3)',
		borderWidth: 1,
		tension: .5
	}]
};

let trafficOptions = {
	backgroundColor: 'rgba(112, 104, 201, .5)',
	fill: true,
	aspectRatio: 2.5,
	animation: {
		duration: 0
	},
	scales: {
		y: {
			beginAtZero: true
		}
	},
	plugins: {
		legend: {
			display: false
		}
	}
};

let traffic = new Chart(line, {
	type: 'line',
	data: trafficData,
	options: trafficOptions
});

chartOption.addEventListener('click', e => {
	const element = e.target;
	const list = chartOption.children;

	for (let i = 0; i < list.length; i++) {
		list[i].classList.remove("active");
	}

	if (element.textContent === "Hourly") {
		hourly(traffic);
		element.classList.add("active");
	} else if (element.textContent === "Daily") {
		daily(traffic);
		element.classList.add("active");
	} else if (element.textContent === "Monthly") {
		monthly(traffic);
		element.classList.add("active");
	} else {
		weekly(traffic);
		element.classList.add("active");
	}
});

function daily(chart) {
	chart.data = {
		labels: ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"],
		datasets: [{
			data: [105, 180, 150, 280, 200, 180, 160],
			tension: .5
		}]
	};
	chart.update();
}

function hourly(chart) {
	chart.data = {
		labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
			"12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
		],
		datasets: [{
			data: [7, 2, 0, 2, 7, 6, 13, 10, 9, 21, 18, 5, 12, 13, 8, 19, 6, 2, 1, 0, 0, 3, 1, 0],
			tension: .5
		}]
	};
	chart.update();
}

function monthly(chart) {
	chart.data = {
		labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		datasets: [{
			data: [2300, 4500, 3900, 8000, 6100, 6700, 5400, 7300, 8500, 6900, 3400, 2000],
			tension: .5
		}]
	};
	chart.update();
}

function weekly(chart) {
	chart.data = {
		labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
		datasets: [{
			data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
			tension: .5
		}]
	};
	chart.update();
}

// Daily Traffic chart
const dailyData = {
	labels: ["S", "M", "T", "W", "T", "F", "S"],
	datasets: [{
		label: '# of Hits',
		data: [75, 115, 175, 125, 225, 200, 100],
		backgroundColor: '#7477BF',
		borderWidth: 1
	}]
};
const dailyOptions = {
	scales: {
		y: {
			beginAtZero: true
		}
	},
	plugins: {
		legend: {
			display: false
		}
	}
};

let dailyChart = new Chart(dailyCanvas, {
	type: 'bar',
	data: dailyData,
	options: dailyOptions
});


// Mobile Users chart
const mobileData = {
	labels: ["Desktop", "Tablet", "Phones"],
	datasets: [{
		label: '# of Users',
		data: [2000, 550, 500],
		borderWidth: 0,
		backgroundColor: [
			'#7477BF',
			'#78CF82',
			'#51B6C8'
		]
	}]
};

const mobileOptions = {
	aspectRatio: 1.9,
	plugins: {
		legend: {
			position: 'right',
			labels: {
				boxWidth: 20,
				fontStyle: 'bold'
			}
		}
	}
};

let mobileChart = new Chart(pie, {
	type: 'doughnut',
	data: mobileData,
	options: mobileOptions
});