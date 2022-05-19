async function editIncomeRow(event) {
    event.preventDefault();

    const id = parseInt(this.id);

    const title = document.querySelector('#income-title_'+`${id}`).value.trim();
    const Budget = parseInt(document.querySelector('#income-budget_'+`${id}`).value);
    const Actual = Number(document.querySelector('#income-actual_'+`${id}`).value);

    const response = await fetch(`/api/income/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            Budget,
            Actual
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/budget/');
    }
    else {
        alert(response.statusText);
    }
}

document.querySelectorAll('.save-income-btn').forEach(element => element.addEventListener('click', editIncomeRow));