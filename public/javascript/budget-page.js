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

    let budgetTotal = 0;
    let incomeTotal = 0;

    let incomeBarChartResponse = await fetch('/api/income/');
    let incomeBarChartData = await incomeBarChartResponse.json();


    incomeBarChartData.map((data) => {
        budgetTotal += data.Budget
        incomeTotal += JSON.parse(data.Actual)
    });

    let budgetActualBar = new Chart(chartTop, {
        type: 'bar',
        data:{
            labels:['Budget', 'Actual'],
            datasets:[{
                label:'',
                data:[
                    budgetTotal,
                    incomeTotal,
                ],
                backgroundColor:[
                'green',
                'red'
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
incomeBarChart();


async function savingsChart() {

    let budget = [];
    let savings = [];
    let title = [];

    let savingsResponse = await fetch('/api/savings/');
    let savingsData = await savingsResponse.json();

    savingsData.map((data) => {
        title.push(data.title);
        budget.push(data.Budget);
        savings.push(JSON.parse(data.Actual));
    })

    let chartHorizontalBar = new Chart(chart2, {
    type: 'radar',
    data:{
        labels: title,
        datasets:[{
            label:'Savings Budget',
            data: budget,
            backgroundColor: 'rgba(0,128,0, 0.2)',
            borderWidth:4,
            borderColor:'rgb(0,128,0)',
            hoverBorderWidth:'7',
            hoverBorderColor:'yellow'
        },
        {
            label:'Savings Actual',
            data: savings,
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderWidth:4,
            borderColor:'rgb(255, 0, 0)',
            hoverBorderWidth:'7',
            hoverBorderColor:'yellow'
        }]
    },
    options:{
        indexAxis: 'y'
    }
    });
}
savingsChart();