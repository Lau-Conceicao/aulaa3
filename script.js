const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const telefone = form.elements['telefone'].value;
    const message = form.elements['message'].value;

    const result = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${telefone}\nMessage: ${message}`;
    alert(result);
});

