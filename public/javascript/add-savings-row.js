async function newSavingsRow(event) {
    event.preventDefault();

    const title = document.querySelector('#new-savings-title').value.trim();
    const Budget = parseInt(document.querySelector('#new-savings-budget').value);
    const Actual = parseFloat(document.querySelector('#new-savings-actual').value);

    if (!title || Number.isNaN(Budget) || Number.isNaN(Actual)) {
        alert('Must fill out all fields! Budget and Actual must be numbers.');
        return;
    }
    else {
        const response = await fetch(`/api/savings`, {
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

document.querySelector('#new-savings-btn').addEventListener('click', newSavingsRow);