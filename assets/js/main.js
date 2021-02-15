const email = document.getElementById('email');
const password = document.getElementById('password');

const form = document.getElementById('form');

// email bos olmasin ve daxil olan data email formatinda olsun
// password uzunlu 8 simvol

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(email.value)

    if (password.value.length < 8) {
        console.log(password.closest('div'))
        password.closest('div').classList.add('hasError')
    }

    if (!validateEmail(email.value)) {
        console.log('emaili duzgun daxil edin');

        email.closest('div').classList.add('hasError')
    }

    if (password.value.length >= 8 && validateEmail(email.value)) {
        form.submit()
    }



    // console.log(validateEmail(email.value))
})

password.addEventListener('keydown', () => {
    setTimeout(() => {

        if (!(password.value.length < 8)) {
            console.log(password.closest('div').classList);
            password.closest('div').classList.remove('hasError')
        }

        console.log(password.value);
    }, 100);
})

email.addEventListener('keydown', () => {
    setTimeout(() => {

        if (validateEmail(email.value)) {
            console.log('emaili duzgun daxil edin');

            email.closest('div').classList.remove('hasError')
        }

        console.log(password.value);
    }, 100);
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}













// framework logic

// const email = document.getElementById('email');
// const password = document.getElementById('password');

// const form = document.getElementById('form');

// // email bos olmasin ve daxil olan data email formatinda olsun
// // password uzunlu 8 simvol

// form.addEventListener('submit', checkForm)

// function checkForm(e) {
//     if (e) {
//         e.preventDefault();
//     }
//     // console.log(email.value)

//     if (!validateEmail(email.value)) {
//         console.log('emaili duzgun daxil edin');

//         email.closest('div').classList.add('hasError');
//         return
//     }

//     if (password.value.length < 8) {
//         console.log(password.closest('div'))
//         password.closest('div').classList.add('hasError');
//         return
//     }



//     form.submit()



//     // console.log(validateEmail(email.value))
// }

// password.addEventListener('keydown', () => {
//     setTimeout(() => {
//         checkForm()
//         if (!(password.value.length < 8)) {
//             console.log(password.closest('div').classList);
//             password.closest('div').classList.remove('hasError')
//         }

//         console.log(password.value);
//     }, 100);
// })

// email.addEventListener('keydown', () => {
//     setTimeout(() => {
//         checkForm()
//         if (validateEmail(email.value)) {
//             console.log('emaili duzgun daxil edin');

//             email.closest('div').classList.remove('hasError')
//         }

//         console.log(password.value);
//     }, 100);
// })

// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }