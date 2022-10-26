

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#contact')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))
    $buttonMailto.setAttribute('href', `mailto:sbgrosso17@gmail.com?subject=${form.get('name')}${form.get('email')}&body={form.get('message')}`)

    $buttonMailto.click()
    
}