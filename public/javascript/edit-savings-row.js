async function editSavingsRow(event) {
    event.preventDefault();

    const id = parseInt(this.id);

    const title = document.querySelector('#savings-title_'+`${id}`).value.trim();
    const Budget = parseInt(document.querySelector('#savings-budget_'+`${id}`).value);
    const Actual = Number(document.querySelector('#savings-actual_'+`${id}`).value);

    const response = await fetch(`/api/savings/${id}`, {
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

document.querySelectorAll('.save-savings-btn').forEach(element => element.addEventListener('click', editSavingsRow));