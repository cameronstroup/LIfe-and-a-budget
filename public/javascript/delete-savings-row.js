async function deleteSavingsRow(event) {
    event.preventDefault();

    const id = parseInt(this.id);

    const response = await fetch(`/api/savings/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/budget');
    }
    else {
        alert(response.statusText);
    }
}

document.querySelectorAll('.delete-savings-btn').forEach(element => element.addEventListener('click', deleteSavingsRow));