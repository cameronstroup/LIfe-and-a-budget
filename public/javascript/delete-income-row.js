async function deleteIncomeRow (event) {
    event.preventDefault();

    const id = parseInt(this.id);

    const response = await fetch(`/api/income/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/budget/');
    }
    else {
        alert(response.statusText);
    }
}

document.querySelectorAll('.delete-income-btn').forEach(element => element.addEventListener('click', deleteIncomeRow));