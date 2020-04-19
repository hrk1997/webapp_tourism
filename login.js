const name = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
coconst errorElement = document.getElementById('error')
form.addEventListener('submit' , (e) => {
    let messages = []
    if (name.value === '' || name.value == null)
    {
        alert.push('name is required')
    }
    e.preventDefault()
    errorElement.innerText = alert.join(',')
})