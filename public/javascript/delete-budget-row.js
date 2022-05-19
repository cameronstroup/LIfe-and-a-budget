async function deleteBudgetRow(event) {
    event.preventDefault();

    const id = parseInt(this.id);

    const response = await fetch(`/api/expenses/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
       document.location.replace('/budget/');
    }
    else {
        alert(response.statusText);
    }
}

document.querySelectorAll('.delete-expenses-btn').forEach(element => element.addEventListener('click', deleteBudgetRow));