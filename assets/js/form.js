/*==================== FORM VALIDATION ====================*/

$("#submit-form").submit((e) => {
    e.preventDefault();
    let name = document.querySelector('.contact__name').value;
    let email = document.querySelector('.contact__mail').value;
    const patternName = /[\w\s\][,][0-9]/gi;
    if (name && email) {
        if (name.length <= 3) {
            document.querySelector("#err-msg").innerHTML = "⚠️ Name must contain morethan 3 characters.";
        } else if (patternName.test(name)) {
            document.querySelector("#err-msg").innerHTML = "⚠️ Name should contain letters only.";
        } else {
            let patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(patternEmail.test(email)) {
                $.ajax({
                    url: "https://script.google.com/macros/s/AKfycbyIftpIrEJ8U0h861SL37VUmfK852neS2LEQY1P3hVdiT5tjr6VcZgr6hsPcWSKUeuR_Q/exec",
                    data: $("#submit-form").serialize(),
                    method: "post",
                    success: function (response) {
                        alert("Form submitted successfully");
                        window.location.reload();
                    },
                    error: function (err) {
                        alert("Something Error");
                    }
                });
            } else {
                document.querySelector("#err-msg").innerHTML = "⚠️ Email is invalid.";
            }
        }
    } else {
        document.querySelector("#err-msg").innerHTML = "⚠️ Name and Email are required.";
    }
});
