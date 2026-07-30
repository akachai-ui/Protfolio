// Global default settings for Chart.js to match the dark theme
Chart.defaults.color = '#ccc';
Chart.defaults.font.family = "'Inter', 'Prompt', sans-serif";
const accentColor = '#ffd700'; // Gold from style.css
const gridColor = 'rgba(255, 255, 255, 0.05)';

// 1. Line Chart (Sales Trend vs Target)
const ctxTrend = document.getElementById('salesTrendChart').getContext('2d');
new Chart(ctxTrend, {
    type: 'line',
    data: {
        labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.'],
        datasets: [
            {
                label: 'ยอดขายจริง (Actual Sales)',
                data: [1.2, 1.5, 1.4, 1.8, 1.7, 2.1, 2.0, 2.4, 2.6], // in millions
                borderColor: accentColor,
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                borderWidth: 3,
                pointBackgroundColor: accentColor,
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true,
                tension: 0.4
            },
            {
                label: 'เป้าหมาย (Target)',
                data: [1.0, 1.2, 1.4, 1.5, 1.6, 1.8, 2.0, 2.1, 2.3],
                borderColor: '#4CAF50',
                borderWidth: 2,
                borderDash: [5, 5],
                pointRadius: 0,
                fill: false,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { 
                position: 'top',
                labels: { color: '#ccc', font: { size: 12 } }
            },
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleFont: { size: 14 },
                bodyFont: { size: 14 },
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.parsed.y + ' ล้านบาท';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: gridColor },
                ticks: {
                    callback: function(value) { return value + 'M'; }
                }
            },
            x: {
                grid: { color: gridColor }
            }
        }
    }
});

// 2. Doughnut Chart (Channels)
const ctxChannel = document.getElementById('channelChart').getContext('2d');
new Chart(ctxChannel, {
    type: 'doughnut',
    data: {
        labels: ['Modern Trade', 'B2B Corporate', 'Direct Sales', 'Online / E-commerce'],
        datasets: [{
            data: [45, 30, 15, 10],
            backgroundColor: [
                accentColor,
                '#ff9800',
                '#4CAF50',
                '#2196F3'
            ],
            borderWidth: 0,
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { 
                position: 'bottom',
                labels: { 
                    color: '#ccc', 
                    padding: 20,
                    font: { size: 12 }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                callbacks: {
                    label: function(context) {
                        return ' ' + context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        },
        cutout: '75%'
    }
});

// 3. Bar Chart (Products)
const ctxProduct = document.getElementById('productChart').getContext('2d');
new Chart(ctxProduct, {
    type: 'bar',
    data: {
        labels: ['อุปกรณ์จัดแสดงสินค้า', 'เครื่องมือแพทย์', 'เฟอร์นิเจอร์สำนักงาน', 'อะไหล่/ชิ้นส่วน', 'บริการติดตั้งและอื่นๆ'],
        datasets: [{
            label: 'ยอดขายรายหมวดหมู่ (ล้านบาท)',
            data: [4.5, 3.2, 2.1, 1.5, 1.1],
            backgroundColor: [
                accentColor,
                'rgba(255, 215, 0, 0.7)',
                'rgba(255, 215, 0, 0.5)',
                'rgba(255, 215, 0, 0.3)',
                'rgba(255, 215, 0, 0.1)'
            ],
            borderRadius: 6,
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                callbacks: {
                    label: function(context) {
                        return ' ' + context.parsed.y + ' ล้านบาท';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: gridColor },
                ticks: {
                    callback: function(value) { return value + 'M'; }
                }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});
