const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = `
    <div class="alert-banner"> 
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains('alert-banner-close')) {
        alert.Banner.style.display = 'none';
    }
});

// Line Graph

let trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31', '32-38'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 2000, 2500, 3000],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficMonthly = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    datasets: [{
        data: [550, 950, 1250, 2050, 3000, 4350, 300, 2000, 500, 150, 1450]
    }]
};

document.querySelector('#btn3').addEventListener('click', e => {
    e.preventDefault();
    trafficChart.data = trafficWeekly;
    trafficChart.update();
});

let trafficDaily = {
    labels: [
        'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
    ],
    datasets: [{
        data: [550, 950, 1250, 2050, 3000, 4350, 5000]
    }]
};

document.querySelector('#btn2').addEventListener('click', e => {
    e.preventDefault();
    trafficChart.data = trafficDaily;
    trafficChart.update();
});

let trafficHourly = {
    labels: ['9am', '12pm', '3pm', '6pm', '9pm', '12am'],
    datasets: [{
        data: [900, 2000, 2150, 1000, 4050, 2500]
    }]
};

document.querySelector('#btn1').addEventListener('click', e => {
    e.preventDefault();
    trafficChart.data = trafficHourly;
    trafficChart.update();
});

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Bar Graph

const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
    labels: [
        'S', 'M', 'T', 'W', 'T', 'F', 'S'
    ],
    datasets: [{
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477bf',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// DOughnut Chart

const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: [
        'Desktop', 'Tablet', 'Phones'
    ],
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
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// Messaging

const user = document.querySelector('#myInput');
const message = document.querySelector('#messageField');
const send = document.querySelector('#send');

send.addEventListener('click', () => {
    if (user.value === '' && message.value === '') {
        alert('Please fill out user and message fields before sending');
    } else if (user.value === '') {
        alert('Please fill out user field before sending');
    } else if (message.value === '') {
        alert('Please fill out message field before sending');
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

