async function handleSubmit(event) {
    event.preventDefault()
    console.log("Working")
    
    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    if(Client.CheckURL(formText) == true ){
        const response = await fetch('http://localhost:8083/api', {
            method: 'POST',
            credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "url": formText }),
        })
        const json = await response.json();
        console.log(json);
        document.getElementById('text').textContent = json.text ;
        document.getElementById('polarity').textContent = json.polarity ;
        document.getElementById('subjectivity').textContent = json.subjectivity ;
    }else{
        alert("Enter Valid Url!!!")
    }
}    
    
export { handleSubmit }