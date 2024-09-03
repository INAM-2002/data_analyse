const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Example API endpoint to get tenant data
app.get('/api/data/:tenant', (req, res) => {
    const tenant = req.params.tenant;
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
    res.json(data[tenant]);
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
