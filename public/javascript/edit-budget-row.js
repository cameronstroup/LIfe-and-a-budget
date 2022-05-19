async function editExpensesRow(event) {
    event.preventDefault();

    const id = parseInt(this.id);

    const title = document.querySelector('#expenses-title_'+`${id}`).value.trim();
    const Budget = parseInt(document.querySelector('#expenses-budget_'+`${id}`).value);
    const Actual = Number(document.querySelector('#expenses-actual_'+`${id}`).value);

    const response = await fetch(`/api/expenses/${id}`, {
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

document.querySelectorAll('.save-expenses-btn').forEach(element => element.addEventListener('click', editExpensesRow));