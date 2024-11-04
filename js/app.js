const dailyCanvas = document.getElementById("bars");
const mobileCanvas = document.getElementById("pie");
const alertBanner = document.getElementById("alert");

const username = document.getElementById("fname");
const message = document.getElementById("message");
const sendButton = document.getElementById("send");

const bell = document.querySelector(".notification");
const notification = document.querySelector(".notifications-dropdown");
const circle = document.querySelector(".circle-notification");

alertBanner.innerHTML =
  `<div class="alert-banner" id="alert">
    <span class="bold">Alert:</span> You have unread messages <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  </div>`

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

bell.addEventListener('click', e => {
  const element = e.target;
  circle.style.display = "none";
    if (notification.style.display === "none") {
      notification.style.display = "inherit";
    } else {
      notification.style.display = "none";
    }
    
    
});

sendButton.addEventListener('click', e => {
  const element = e.target;
  if (username.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (username.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
});

Chart.defaults.elements.point.radius = 5;

let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
  "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
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


// data for daily traffic bar chart
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

let dailyChart = new Chart(bars, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});


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