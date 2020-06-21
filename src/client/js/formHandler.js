function handleSubmit(event) {
    event.preventDefault()
    console.log("hello")

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    const data = {formText};
    console.log(data);
}

export { handleSubmit }
