// Function to simulate starting a live session
function startLiveSession() {
    alert("Redirecting to the live session...");
    // Code to handle redirect to live session platform
}

// Chart for student grades and performance data
const ctxGrades = document.getElementById('gradesChart').getContext('2d');
const gradesChart = new Chart(ctxGrades, {
    type: 'bar',
    data: {
        labels: ['Math', 'Science', 'English', 'History', 'Physical Education'],
        datasets: [{
            label: 'Grade (%)',
            data: [85, 90, 78, 92, 88],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart for overall student performance
const ctxOverall = document.getElementById('overallPerformanceChart').getContext('2d');
const overallPerformanceChart = new Chart(ctxOverall, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Overall Performance (%)',
            data: [75, 80, 85, 90, 88],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart for AI-driven insights and improvement areas
const ctxImprovement = document.getElementById('improvementAreasChart').getContext('2d');
const improvementAreasChart = new Chart(ctxImprovement, {
    type: 'pie',
    data: {
        labels: ['Math', 'Science', 'English', 'Physical Education'],
        datasets: [{
            label: 'Focus Areas for Improvement',
            data: [25, 30, 15, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});



