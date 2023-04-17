var cpu_chart = new Chart($('#cpu_chart'), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [0, 100],
            backgroundColor: [
                '#E74C3C',
                '#2ECC71'
            ],
            borderColor: [
                '#FFFFFF',
                '#FFFFFF'
            ],
            borderWidth: 1
        }]
    },
    options: {
        cutoutPercentage: 80,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'CPU Usage'
        }
    }
});

var gpu_chart = new Chart($('#gpu_chart'), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [0, 100],
            backgroundColor: [
                '#E74C3C',
                '#2ECC71'
            ],
            borderColor: [
                '#FFFFFF',
                '#FFFFFF'
            ],
            borderWidth: 1
        }]
    },
    options: {
        cutoutPercentage: 80,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'GPU Usage'
        }
    }
});

var disk_chart = new Chart($('#disk_chart'), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [0, 100],
            backgroundColor: [
                '#E74C3C',
                '#2ECC71'
            ],
            borderColor: [
                '#FFFFFF',
                '#FFFFFF'
            ],
            borderWidth: 1
        }]
    },
    options: {
        cutoutPercentage: 80,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Disk Space Usage'
        }
    }
});

var ram_chart = new Chart($('#ram_chart'), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [0, 100],
            backgroundColor: [
                '#E74C3C',
                '#2ECC71'
            ],
            borderColor: [
                '#FFFFFF',
                '#FFFFFF'
            ],
            borderWidth: 1
        }]
    },
    options: {
        cutoutPercentage: 80,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'RAM Usage'
        }
    }
});
