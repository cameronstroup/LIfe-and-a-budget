async function newBudgetRow(event) {
    event.preventDefault();

    const title = document.querySelector('#new-expense-title').value.trim();
    const Budget = parseInt(document.querySelector('#new-expense-budget').value);
    const Actual = parseFloat(document.querySelector('#new-expense-actual').value);

    if (!title || Number.isNaN(Budget) || Number.isNaN(Actual)) {
        alert('Must fill out all fields! Budget and Actual must be numbers.');
        return;
    }
    else {
        const response = await fetch(`/api/expenses`, {
            method: 'POST',
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
}

document.querySelector('#new-expenses-btn').addEventListener('click', newBudgetRow);