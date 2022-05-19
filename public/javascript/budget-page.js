const chart1 = document.getElementById('chart1').getContext('2d');
const chartTop = document.getElementById('topChart').getContext('2d');
const chart2 = document.getElementById('chart2').getContext('2d');

//Global options
// Chart.defaults.global.defaultFontFamily = 'Lato';
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = 'grey';

let massPopChart = new Chart(chart1, {

    type: 'pie',
    data:{
        labels:['Budget', 'Actual'],
        datasets:[{
            label:'',
            data:[
                20000,
                25000,
            ],
            //backgroundColor:'green'
            backgroundColor:[
                'green',
                'red',
                'orange',
                'purple',
                'blue',
                'pink' 
            ],
            borderWidth:4,
            borderColor:'black',
            hoverBorderWidth:'7',
            hoverBorderColor:'yellow'
        }]
    },
    options:{
        title:{
            display: true,
            text: 'largest cities'
        }
    }
});





//Global options
// Chart.defaults.global.defaultFontFamily = 'Lato';
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = 'grey';

let budgetActualBar = new Chart(chartTop, {
    type: 'bar',
    data:{
        labels:['Budget', 'Actual'],
        datasets:[{
            label:'',
            data:[
                20000,
                25000,
            ],
            //backgroundColor:'green'
            backgroundColor:[
            'green',
            'red',
            'orange',
            'purple',
            'blue',
            'pink' 
            ],
            borderWidth:4,
            borderColor:'black',
            hoverBorderWidth:'7',
            hoverBorderColor:'yellow'
        }]
    },
    options:{
        title:{
            display: true,
            text: 'largest cities'
        }
    }
});


//Global options
// Chart.defaults.global.defaultFontFamily = 'Lato';
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = 'grey';

let chartHorizontalBar = new Chart(chart2, {
type: 'bar',
data:{
    labels:['Budget', 'Actual'],
    datasets:[{
        label:'',
        data:[
            20000,
            25000,
        ],
        //backgroundColor:'green'
        backgroundColor:[
        'green',
        'red',
        'orange',
        'purple',
        'blue',
        'pink' 
        ],
        borderWidth:4,
        borderColor:'black',
        hoverBorderWidth:'7',
        hoverBorderColor:'yellow'
    }]
},
options:{
    title:{
        display: true,
        text: 'largest cities'
    },
    indexAxis: 'y'
}
});