const chart1 = document.getElementById('chart1').getContext('2d');
const chartTop = document.getElementById('topChart').getContext('2d');
const chart2 = document.getElementById('chart2').getContext('2d');

async function pieChart() {

    let titleArray = [];
    let spendingArray = [];

    let pieChartDataArray = await fetch('/api/expenses/')
    let pieChartData = await pieChartDataArray.json();

    pieChartData.map((data) => {
        titleArray.push(data.title)
        spendingArray.push(data.Actual)
    });

    let massPopChart = new Chart(chart1, {

        type: 'pie',
        data:{
            labels: titleArray,
            datasets:[{
                label:'',
                data: spendingArray,
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
}
pieChart();

async function incomeBarChart() {

    let budget = [];
    let income = [];
    let budgetTotal = 0;
    let incomeTotal = 0;

    let incomeBarChartResponse = await fetch('/api/income/');
    let incomeBarChartData = await incomeBarChartResponse.json();

    incomeBarChartData.map((data) => {
        budget.push(data.Budget);
        income.push(data.Actual);
    });


    for (let count = 0; count < budget.length; count++) {
        budgetTotal = budget[count] + budgetTotal 
    }

    for (let count = 0; count < income.length; count++) {
        incomeTotal = JSON.parse(income[count]) + incomeTotal
    }

// let budgetActualBar = new Chart(chartTop, {
//     type: 'bar',
//     data:{
//         labels:['Budget', 'Actual'],
//         datasets:[{
//             label:'',
//             data:[
//                 20000,
//                 25000,
//             ],
//             //backgroundColor:'green'
//             backgroundColor:[
//             'green',
//             'red',
//             'orange',
//             'purple',
//             'blue',
//             'pink' 
//             ],
//             borderWidth:4,
//             borderColor:'black',
//             hoverBorderWidth:'7',
//             hoverBorderColor:'yellow'
//         }]
//     },
//     options:{
//         title:{
//             display: true,
//             text: 'largest cities'
//         }
//     }
// });
}
incomeBarChart();


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