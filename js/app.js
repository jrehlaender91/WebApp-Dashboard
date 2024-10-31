Chart.defaults.backgroundColor = '#d5d6ec';
Chart.defaults.borderColor = '#7477bf';
Chart.defaults.elements.point.radius = 5;
//Chart.defaults.plugins.tooltip.cornerRadius = 6;



const line = document.getElementById('line');

new Chart(line, {
  type: 'line',
  data: {
    labels: [
      '16-22', 
      '23-29', 
      '30-5', 
      '6-12', 
      '13-19', 
      '20-26',
      '27-3',
      '4-10',
      '11-17',
      '18-24',
      '25-31'],
    datasets: [{
      label: 'Traffic',
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500],
      borderWidth: 1,
      fill: true,
      tension: .5
    }]
  },
  options: {
    plugins: {
    legend: {
    	display: false
    }},
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


const bars = document.getElementById('bars');
Chart.defaults.backgroundColor = '#7477bf';
Chart.defaults.borderColor = '#7477bf';

new Chart(bars, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      label: 'Daily Traffic',
      data: [70, 120, 175, 125, 225, 200, 100],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
    legend: {
    	display: false
    }},
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const pie = document.getElementById('pie');

new Chart(pie, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
      label: '# of Votes',
      data: [70, 15, 15],
      borderWidth: 1,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ]
    }]
  },
  options: {
    plugins: {
    legend: {
    	display: true
    }},
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});