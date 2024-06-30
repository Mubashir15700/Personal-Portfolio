$("#submit-form").submit((e) => {
    e.preventDefault();
    let form = document.querySelector('#submit-form');
    let name = document.querySelector('.contact__name').value;
    let email = document.querySelector('.contact__mail').value;
    const patternName = /^[a-zA-Z\s]+$/; // Only letters and spaces

    if (name && email) {
        if (name.length <= 3) {
            document.querySelector("#err-msg").innerHTML = "⚠️ Name must contain more than 3 characters.";
        } else if (!patternName.test(name)) {
            document.querySelector("#err-msg").innerHTML = "⚠️ Name should contain letters only.";
        } else {
            let patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (patternEmail.test(email)) {
                form.addEventListener("submit", function (event) {
                    event.preventDefault();
                    // these IDs from the previous steps
                    emailjs.sendForm('service_m9rjy85', 'template_v6y7ahp', this)
                        .then(() => {
                            alert("Submitted");
                            console.log('SUCCESS!');
                        }, (error) => {
                            alert("Failed to submit: ", error);
                            console.log('FAILED...', error);
                        });
                });
            } else {
                document.querySelector("#err-msg").innerHTML = "⚠️ Please enter a valid email.";
            }
        }
    } else {
        document.querySelector("#err-msg").innerHTML = "⚠️ Name and Email are required.";
    }
});
