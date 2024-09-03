document.addEventListener('DOMContentLoaded', function () {
    // Load dashboard data on page load and when tenant changes
    loadDashboard();
    document.getElementById('tenant').addEventListener('change', loadDashboard);
});

function loadDashboard() {
    const tenant = document.getElementById('tenant').value;

    // Retrieve simulated data based on the selected tenant
    const data = getDataForTenant(tenant);

    if (data) {
        // Update charts with the new data
        updateChart('chart1', data.chart1);
        updateChart('chart2', data.chart2);
    } else {
        console.error('No data found for tenant:', tenant);
    }
}

function getDataForTenant(tenant) {
    // Placeholder data for demonstration purposes
    const data = {
        tenant1: {
            chart1: [10, 20, 30, 40],
            chart2: [15, 25, 35, 45]
        },
        tenant2: {
            chart1: [20, 30, 40, 50],
            chart2: [25, 35, 45, 55]
        },
        tenant3: {
            chart1: [30, 40, 50, 60],
            chart2: [35, 45, 55, 65]
        }
    };

    return data[tenant];
}

function updateChart(chartId, data) {
    const ctx = document.getElementById(chartId).getContext('2d');

    // Clear the canvas if there's an existing chart
    if (ctx.chart) {
        ctx.chart.destroy();
    }

    // Create a new chart instance
    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Revenue',
                data: data,
                backgroundColor: '#007bff',
                borderColor: '#0056b3',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function generateReport() {
    alert('Report generated!');
}
