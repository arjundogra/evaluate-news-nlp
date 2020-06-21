function handleSubmit(event) {
    event.preventDefault()
    console.log("hello")

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    
    fetch('http://localhost:8083/api', {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "url": formText }),
    })
    .then(response => {
        console.log(response)
        document.getElementById('results').textContent = response;
    })
}

export { handleSubmit }
