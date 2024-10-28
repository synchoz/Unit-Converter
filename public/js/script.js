document.getElementById("myForm").addEventListener('submit', (event) => {
    event.preventDefault();

    const unitTo = document.getElementById('unitTo').value;
    const unitFrom = document.getElementById('unitFrom').value;
    const value = document.getElementById('value').value;
    const form = document.getElementById('myForm');
    const reqPath = form.getAttribute("action");

    fetch(`${reqPath}?unitFrom=${unitFrom}&unitTo=${unitTo}&value=${value}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('myForm').style.display = 'none';
            document.getElementById('mainResultDiv').style.display = 'flex';
            const resultDiv = document.getElementById('resultDiv').outerText = data;
        })
})

function resetFunc() {
    document.getElementById('myForm').style.display = 'block';
    document.getElementById('mainResultDiv').style.display = 'none';

    document.getElementById('unitTo').value = '';
    document.getElementById('unitFrom').value = '';
    document.getElementById('value').value = '';
    document.getElementById('resultDiv').outerText = '';
}