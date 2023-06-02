function no_name() {
    alert("Enter the name first");
    document.querySelector('#name').focus();
}

function no_phone() {
    alert("Enter the phone number first");
    document.querySelector('#phone').focus();
}

function no_email() {
    alert("Enter the email first");
    document.querySelector('#email').focus();
}
function no_pass() {
    alert("Enter the password first");
    document.querySelector('#password').focus();
}

document.querySelector('#phone').addEventListener('click', () => {
    if (document.querySelector('#name').value.length == 0)
        no_name();
});

document.querySelector('#email').addEventListener('click', () => {
    if (document.querySelector('#name').value.length == 0)
        no_name();
    else if (document.querySelector('#phone').value.length == 0)
        no_phone();
});

document.querySelector('#password').addEventListener('click', () => {
    if (document.querySelector('#name').value.length == 0)
        no_name();
    else if (document.querySelector('#phone').value.length == 0)
        no_phone();
    else if (document.querySelector('#email').value.length == 0)
        no_email();
})

document.querySelector('#gen').addEventListener('click', () => {
    if (document.querySelector('#name').value.length == 0)
        no_name();
    else if (document.querySelector('#phone').value.length == 0)
        no_phone();
    else if (document.querySelector('#email').value.length == 0)
        no_email();
    else if (document.querySelector('#password').value.length == 0)
        no_email();
});
