document.addEventListener('DOMContentLoaded', function () {
    loadDashboard();

    // Add event listener to tenant dropdown to reload the dashboard when the tenant changes
    document.getElementById('tenant').addEventListener('change', loadDashboard);
});

function loadDashboard() {
    const tenant = document.getElementById('tenant').value;

    // Retrieve simulated data based on the selected tenant
    const data = getDataForTenant(tenant);

    // Update charts with the new data
    updateChart('chart1', data.chart1);
    updateChart('chart2', data.chart2);
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

    // Destroy the previous chart instance if it exists to avoid overlapping charts
    if (window[chartId]) {
        window[chartId].destroy();
    }

    // Create a new chart instance and store it in a global variable
    window[chartId] = new Chart(ctx, {
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
            scales: {
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
