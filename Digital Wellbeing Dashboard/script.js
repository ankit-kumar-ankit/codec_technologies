
// simulate screen time data
let screenTime = 0;

// update screen time display
function updateScreenTimeDisplay() {
    const screenTimeDisplay = document.getElementById('screen-time-display');
    const hours = Math.floor(screenTime / 3600);
    const minutes = Math.floor((screenTime % 3600) / 60);
    screenTimeDisplay.textContent = `${hours} hours ${minutes} minutes`;
}

// simulate activity data
const activities = [
    { name: 'Social Media', time: 30 },
    { name: 'Productivity', time: 120 },
    { name: 'Entertainment', time: 60 },
];

// generate activity list
function generateActivityList() {
    const activityList = document.getElementById('activity-list');
    activities.forEach((activity) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${activity.name}: ${activity.time} minutes`;
        activityList.appendChild(listItem);
    });
}

// notification button click handler
function notificationBtnClickHandler() {
    alert('Reminder set!');
}

// initialize
function init() {
    updateScreenTimeDisplay();
    generateActivityList();
    const notificationBtn = document.getElementById('notification-btn');
    notificationBtn.addEventListener('click', notificationBtnClickHandler);
}

init();